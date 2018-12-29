/*
 * @author Joshua Koo http://joshuakoo.com
 */

var undo = require("./util_undo"),
  Dispatcher = require("./util_dispatcher"),
  Theme = require("./theme"),
  UndoManager = undo.UndoManager,
  UndoState = undo.UndoState,
  Settings = require("./settings"),
  utils = require("./utils"),
  LayerCabinet = require("./view_layer_cabinet"),
  TimelinePanel = require("./view_panel"),
  package_json = require("../package.json"),
  IconButton = require("./ui_icon_button"),
  style = utils.style,
  saveToFile = utils.saveToFile,
  openAs = utils.openAs,
  STORAGE_PREFIX = utils.STORAGE_PREFIX,
  ScrollBar = require("./ui_scrollbar"),
  DataStore = require("./util_datastore");

var Z_INDEX = 999;

var width, height, path, layers, x2;

function LayerProp(name, label) {
  this.name = name;
  this.label = label;
  this.values = [];
  this.selected = false;
  this._value = 0;

  this._color = "#" + ((Math.random() * 0xffffff) | 0).toString(16);

  this.highlights = [];
  this.markers = [];

  this.select = function(update) {};
  /*
	this.max
	this.min
	this.step
	*/
}

//var hostElement;

function Timeliner(target, host) {
  // Dispatcher for coordination
  var dispatcher = new Dispatcher();

  this.dispatcher = dispatcher;
  //hostElement = host;

  // Data
  var data = new DataStore();
  var layer_store = data.get("layers");
  var layers = layer_store.value;

  window._data = data; // expose it for debugging

  // Undo manager
  var undo_manager = new UndoManager(dispatcher);

  // Views
  var timeline = new TimelinePanel(data, dispatcher);
  this.timeline = timeline;

  var layer_panel = new LayerCabinet(data, dispatcher);

  setTimeout(function() {
    // hack!
    undo_manager.save(new UndoState(data, "Loaded"), true);
  });

  dispatcher.on("keyframe", function(layer, value) {
    var index = layers.indexOf(layer);

    var t = data.get("ui:currentTime").value;

    if (layer) dispatcher.fire("keyframe.add", layer.name, t);
    /*
    var v = utils.findTimeinLayer(layer, t);

    // console.log(v, '...keyframe index', index, utils.format_friendly_seconds(t), typeof(v));
    // console.log('layer', layer, value);

    if (typeof v === "number") {
      
      layer.values.splice(v, 0, {
        time: t,
        value: value,
        _color: "#" + ((Math.random() * 0xffffff) | 0).toString(16)
      });
     

      undo_manager.save(new UndoState(data, "Add Keyframe"));
      dispatcher.fire("keyframe.add", layer.name, t);
    } else {
      //console.log("remove from index", v);
      //layer.values.splice(v.index, 1);
      dispatcher.fire("keyframe.remove", layer.name, t);
      undo_manager.save(new UndoState(data, "Remove Keyframe"));
    }*/

    repaintAll();
  });

  dispatcher.on("keyframe.move", function(layer, value) {
    undo_manager.save(new UndoState(data, "Move Keyframe"));
  });

  // dispatcher.fire('value.change', layer, me.value);
  dispatcher.on("value.change", function(layer, value, dont_save) {
    if (layer._mute) return;

    var t = data.get("ui:currentTime").value;
    /*
    var v = utils.findTimeinLayer(layer, t);

    // console.log(v, 'value.change', layer, value, utils.format_friendly_seconds(t), typeof(v));
    if (typeof v === "number") {
      layer.values.splice(v, 0, {
        time: t,
        value: value,
        _color: "#" + ((Math.random() * 0xffffff) | 0).toString(16)
      });
      if (!dont_save) undo_manager.save(new UndoState(data, "Add value"));
    } else {
      v.object.value = value;
      if (!dont_save) undo_manager.save(new UndoState(data, "Update value"));
    }*/

    repaintAll();
  });

  dispatcher.on("action:solo", function(layer, solo) {
    layer._solo = solo;
    console.log(layer, solo);
    // When a track is solo-ed, playback only changes values
    // of that layer.
  });

  dispatcher.on("action:mute", function(layer, mute) {
    layer._mute = mute;

    // When a track is mute, playback does not play
    // frames of those muted layers.

    // also feels like hidden feature in photoshop

    // when values are updated, eg. from slider,
    // no tweens will be created.
    // we can decide also to "lock in" layers
    // no changes to tween will be made etc.
  });

  dispatcher.on("ease", function(layer, ease_type) {
    var t = data.get("ui:currentTime").value;
    var v = utils.timeAtLayer(layer, t);
    // console.log('Ease Change > ', layer, value, v);
    if (v && v.entry) {
      v.entry.tween = ease_type;
    }

    undo_manager.save(new UndoState(data, "Add Ease"));

    repaintAll();
  });

  var start_play = null,
    played_from = 0; // requires some more tweaking

  dispatcher.on("controls.toggle_play", function() {
    if (start_play) {
      dispatcher.fire("controls.pause");
    } else {
      dispatcher.fire("controls.play");
    }
  });

  dispatcher.on("controls.restart_play", function() {
    if (!start_play) {
      startPlaying();
    }

    setCurrentTime(played_from);
  });

  dispatcher.on("controls.play", startPlaying);
  dispatcher.on("controls.pause", pausePlaying);

  function startPlaying() {
    // played_from = timeline.current_frame;
    start_play = 1;

    layer_panel.setControlStatus(true);
    //dispatcher.fire('controls.status', true);
  }

  function pausePlaying() {
    start_play = null;
    layer_panel.setControlStatus(false);
    // dispatcher.fire('controls.status', false);
  }

  dispatcher.on("controls.stop", function() {
    if (start_play !== null) pausePlaying();
    setCurrentTime(0);
  });

  var currentTimeStore = data.get("ui:currentTime");
  dispatcher.on("time.update", setCurrentTime);

  dispatcher.on("update.scrollTime", function(v) {
    v = Math.max(0, v);
    data.get("ui:scrollTime").value = v;
    repaintAll();
  });

  this.scrollX = function(time) {
    dispatcher.fire("update.scrollTime", time);
  };

  function setCurrentTime(value, cartime) {
    value = Math.max(0, value);
    currentTimeStore.value = value;
    //if (start_play) start_play = performance.now() - value * 1000;

    // set car time
    if (cartime) {
      data.setValue("ui:carTime", cartime);
    }

    // processing automatic horizontal scrolling
    if (value !== undefined) {
      var currentScrollTime = data.get("ui:scrollTime").value;
      var maxVisibleTime = data.get("ui:maxVisibleTime").value;

      var checkForward = value - maxVisibleTime + 5;
      var checkBack = value - currentScrollTime + 5;

      if (checkForward > 0) {
        dispatcher.fire("update.scrollTime", currentScrollTime + checkForward);
      } else {
        if (checkBack < 0) {
          var shiftback = value - 5;
          dispatcher.fire("update.scrollTime", shiftback > 0 ? shiftback : 0);
        }
      }
      /*
      if (checkBack > 0) {
        dispatcher.fire("update.scrollTime", currentScrollTime - checkBack);
      }*/
      //dispatcher.fire("update.scrollTime", value);
    }

    repaintAll();
  }
  this.setCurrentTime = setCurrentTime;

  dispatcher.on("target.notify", function(name, value) {
    if (target) target[name] = value;
  });

  dispatcher.on("update.scale", function(v) {
    data.get("ui:timeScale").value = v;

    timeline.repaint();
  });

  // handle undo / redo
  dispatcher.on("controls.undo", function() {
    var history = undo_manager.undo();
    data.setJSONString(history.state);

    updateState();
  });

  dispatcher.on("controls.redo", function() {
    var history = undo_manager.redo();
    data.setJSONString(history.state);

    updateState();
  });

  /*
		Paint Routines
	*/

  function paint() {
    requestAnimationFrame(paint);

    if (start_play) {
      //var t = (performance.now() - start_play) / 1000;
      //setCurrentTime(t);
      //if (data.get("ui:currentTime").value>=data.get("ui:totalTime").value) {
      //setCurrentTime(0);
      //}
      /*
      if (t > data.get("ui:totalTime").value) {
        // simple loop
        start_play = performance.now();
      }*/
    }

    if (needsResize) {
      div.style.width = width + "px";
      div.style.height = height + "px";

      restyle(layer_panel.dom, timeline.dom);

      timeline.resize();
      repaintAll();
      needsResize = false;

      dispatcher.fire("resize");
    }

    timeline._paint();
  }

  paint();

  /*
		End Paint Routines
	*/

  function loadJSONString(o) {
    // should catch and check errors here
    var json = JSON.parse(o);
    load(json);
  }

  function load(o) {
    data.setJSON(o);
    //
    if (data.getValue("ui") === undefined) {
      data.setValue("ui", {
        currentTime: 0,
        totalTime: Settings.default_length,
        scrollTime: 0,
        timeScale: Settings.time_scale
      });
    }

    undo_manager.clear();
    undo_manager.save(new UndoState(data, "Loaded"), true);

    updateState();
  }

  function setDuration(duration) {
    data.setValue("ui:totalTime", duration);
    updateState();

    const { width } = data.get("ui:bounds").value;

    // 1 == 60
    const visibleBlocks = parseInt((width - Settings.LEFT_PANE_WIDTH) / 60, 10);
    const needBlocks = parseInt(duration / 60, 10) + 1;

    //console.log(width, visibleBlocks, needBlocks);

    dispatcher.fire("update.scale", visibleBlocks / needBlocks);
  }
  this.setDuration = setDuration;

  var updateState = function updateState() {
    layers = layer_store.value; // FIXME: support Arrays
    layer_panel.setState(layer_store);
    timeline.setState(layer_store);

    repaintAll();
  };
  this.updateState = updateState;

  function repaintAll() {
    var content_height = layers.length * Settings.LINE_HEIGHT;
    scrollbar.setLength(Settings.TIMELINE_SCROLL_HEIGHT / content_height);

    layer_panel.repaint();
    timeline.repaint();
  }

  function open(title) {
    if (title) {
      loadJSONString(localStorage[STORAGE_PREFIX + title]);
    }
  }

  this.openLocalSave = open;

  dispatcher.on("new", function() {
    data.blank();
    updateState();
  });

  /*  
  dispatcher.on("open", open);
  dispatcher.on("export", exportJSON);

  dispatcher.on("save", saveSimply);
  dispatcher.on("save_as", saveAs);


  // Expose API
  this.save = save;
  this.load = load;
  */

  /*
		Start DOM Stuff (should separate file)
	*/

  var div = document.createElement("div");
  div.style.cssText = "position: absolute;";
  //div.style.top = "22px";

  var pane = document.createElement("div");
  pane.setAttribute("class", "TimelinerPanel");

  var button_styles = {
    width: "20px",
    height: "20px",
    padding: "2px",
    marginRight: "2px"
  };

  var pane_status = document.createElement("div");

  var footer_styles = {
    position: "absolute",
    //width: "100%",
    height: "22px",
    lineHeight: "22px",
    bottom: "0",
    right: "0px",
    // padding: '2px',
    background: Theme.a,
    fontSize: "11px"
  };

  style(pane_status, footer_styles, {
    borderTop: "1px solid " + Theme.b,
    width: "100%"
  });

  pane.appendChild(div);
  pane.appendChild(pane_status);
  //pane.appendChild(pane_title);

  var label_status = document.createElement("span");
  label_status.textContent = "";
  label_status.style.marginLeft = "10px";

  this.setStatus = function(text) {
    label_status.textContent = text;
  };

  dispatcher.on("state:save", function(description) {
    dispatcher.fire("status", description);
    //save("autosave");
  });

  dispatcher.on("status", this.setStatus);

  var bottom_right = document.createElement("div");
  style(bottom_right, footer_styles, {
    textAlign: "right"
  });

  pane_status.appendChild(label_status);
  pane_status.appendChild(bottom_right);

  /**/
  // zoom in
  var zoom_in = new IconButton(12, "zoom_in", "zoom in", dispatcher);
  zoom_in.onClick(function() {
    var currentZoom = data.get("ui:timeScale").value;
    data.setValue("ui:timeScale", currentZoom * 2);
    timeline.repaint();
  });

  // zoom out
  var zoom_out = new IconButton(12, "zoom_out", "zoom out", dispatcher);
  zoom_out.onClick(function() {
    var currentZoom = data.get("ui:timeScale").value;
    data.setValue("ui:timeScale", currentZoom / 2);
    timeline.repaint();
  });

  // settings
  //var cog = new IconButton(12, "cog", "settings", dispatcher);

  bottom_right.appendChild(zoom_in.dom);
  bottom_right.appendChild(zoom_out.dom);
  //bottom_right.appendChild(cog.dom);

  // add layer
  /*
  var plus = new IconButton(12, "plus", "New Layer", dispatcher);
  plus.onClick(function() {
    dispatcher.fire("controls.addLayer");
    //var name = prompt("Layer name?");
    //addLayer(name);

    //undo_manager.save(new UndoState(data, "Layer added"));

    repaintAll();
  });

  style(plus.dom, button_styles);
  bottom_right.appendChild(plus.dom);
  */

  // trash
  /*
  var trash = new IconButton(12, "trash", "Delete save", dispatcher);
  trash.onClick(function() {
    let layers = layer_store.value || [];
    dispatcher.fire("controls.deleteLayer", layers.find(l => l.selected));
  });
  style(trash.dom, button_styles, { marginRight: "2px" });
  bottom_right.appendChild(trash.dom);
  */

  //
  // Handle DOM Views
  //

  // Shadow Root
  var root = host;

  root.appendChild(pane);

  div.appendChild(layer_panel.dom);
  div.appendChild(timeline.dom);

  var scrollbar = new ScrollBar(200, 10);
  //div.appendChild(scrollbar.dom);

  // scroll layers issues

  this.selectLayer = (layerName, scroll) => {
    let layers = layer_store.value || [];
    layers.forEach(l => (l.selected = false));

    let layer = layers.find(l => l.name == layerName);
    layer.selected = true;

    if (scroll) this.scrollToLayer(layerName);
    repaintAll();
  };

  dispatcher.on("select.layer", this.selectLayer);

  this.scrollToLayer = layerName => {
    const layerIndex = layer_store.value.findIndex(l => l.name == layerName);
    if (layerIndex !== undefined) {
      this.scrollLayers((layerIndex - 1) * Settings.LINE_HEIGHT); // Magic number
    }
  };

  this.scrollLayers = scrollTo => {
    if (scrollTo < 0) scrollTo = 0;
    let realScroll = layer_panel.scrollBy(scrollTo);
    timeline.scrollBy(realScroll);

    data.setValue("currentScroll", realScroll);
  };

  this.wheelScroll = e => {
    let currentScroll = data.get("currentScroll").value || 0;
    if (e.deltaY < 0) {
      this.scrollLayers(currentScroll - Settings.LINE_HEIGHT);
    }
    if (e.deltaY > 0) {
      this.scrollLayers(currentScroll + Settings.LINE_HEIGHT);
    }
  };

  layer_panel.dom.addEventListener("wheel", this.wheelScroll);
  timeline.dom.addEventListener("wheel", this.wheelScroll);

  dispatcher.on("ui:scrollLayers", this.scrollLayers);

  // percentages
  scrollbar.onScroll.do((type, scrollTo) => {
    if (type == "scrollto") dispatcher.fire("ui:scrollLayers", scrollTo);
  });

  // document.addEventListener('keypress', function(e) {
  // 	console.log('kp', e);
  // });
  // document.addEventListener('keyup', function(e) {
  // 	if (undo) console.log('UNDO');

  // 	console.log('kd', e);
  // });

  // TODO: Keyboard Shortcuts
  // Esc - Stop and review to last played from / to the start?
  // Space - play / pause from current position
  // Enter - play all
  // k - keyframe

  document.addEventListener("keydown", function(e) {
    var play = e.keyCode == 32; // space
    var enter = e.keyCode == 13; //
    var undo = e.metaKey && e.keyCode == 91 && !e.shiftKey;

    var active = document.activeElement;
    // console.log( active.nodeName );

    if (active.nodeName.match(/(INPUT|BUTTON|SELECT|TIMELINER)/)) {
      active.blur();
    }

    /*
    if (play) {
      dispatcher.fire("controls.toggle_play");
    } else if (enter) {
      // FIXME: Return should play from the start or last played from?
      dispatcher.fire("controls.restart_play");
      // dispatcher.fire('controls.undo');
    } else if (e.keyCode == 27) {
      // Esc = stop. FIXME: should rewind head to last played from or Last pointed from?
      dispatcher.fire("controls.pause");
    } else {
      // console.log("keydown", e.keyCode);
    }*/
  });

  var needsResize = true;

  function resize(width, height) {
    data.get("ui:bounds").value = {
      width: width,
      height: height
    };

    // TODO: remove ugly hardcodes
    width -= 4;
    height -= 22;

    Settings.width = width - Settings.LEFT_PANE_WIDTH;
    Settings.height = height;

    Settings.TIMELINE_SCROLL_HEIGHT = height - Settings.MARKER_TRACK_HEIGHT;
    var scrollable_height = Settings.TIMELINE_SCROLL_HEIGHT;

    scrollbar.setHeight(scrollable_height - 2);
    // scrollbar.setThumb

    style(scrollbar.dom, {
      top: Settings.MARKER_TRACK_HEIGHT + "px",
      left: width - 16 + "px"
    });

    needsResize = true;
  }

  function restyle(left, right) {
    left.style.cssText =
      "position: absolute; left: 0px; top: 0px; height: " +
      Settings.height +
      "px;";
    style(left, {
      // background: Theme.a,
      overflow: "hidden"
    });
    left.style.width = Settings.LEFT_PANE_WIDTH + 20 + "px";

    // right.style.cssText = 'position: absolute; top: 0px;';
    right.style.position = "absolute";
    right.style.top = "0px";
    right.style.left = Settings.LEFT_PANE_WIDTH + "px";
  }

  function addLayer(name, label) {
    var layer = new LayerProp(name, label);

    layers = layer_store.value;
    layers.push(layer);

    layer_panel.setState(layer_store);
  }

  this.addLayer = addLayer;

  function deleteLayer(name) {
    let layers = data.get("layers").value;
    layers = layers.filter(l => l.name != name);

    data.setValue("layers", layers);
    updateState();
  }

  this.deleteLayer = deleteLayer;

  function setLayerValues(name, markers = []) {
    let layer = (layer_store.value || {}).find(l => l.name === name);
    layer.values = markers.map(m => {
      return {
        time: m
      };
    });
    layer_panel.setState(layer_store);
    updateState();
  }

  this.setLayerValues = setLayerValues;

  function setLayerHighLights(name, layerUpdate) {
    let layer = (layer_store.value || {}).find(l => l.name === name);
    layer.highlights = layerUpdate;
    layer_panel.setState(layer_store);
  }

  this.setLayerHighLights = setLayerHighLights;

  this.setTarget = function(t) {
    timeline = t;
  };

  function getValueRanges(ranges, interval) {
    interval = interval ? interval : 0.15;
    ranges = ranges ? ranges : 2;

    // not optimized!
    var t = data.get("ui:currentTime").value;

    var values = [];

    for (var u = -ranges; u <= ranges; u++) {
      // if (u == 0) continue;
      var o = {};

      for (var l = 0; l < layers.length; l++) {
        var layer = layers[l];
        var m = utils.timeAtLayer(layer, t + u * interval);
        o[layer.name] = m.value;
      }

      values.push(o);
    }

    return values;
  }

  this.getValues = getValueRanges;

  function setBounds(element, x, y, w, h) {
    if (element === pane) {
      //element.style.width = w + "px";
      const { width, height } = host.getBoundingClientRect();
      //console.log(width, height);
      element.style.width = width - 2 + "px";
      element.style.height = height - 2 + "px";
      resize(width - 2, height - 2);
    } else {
      element.style.left = x + "px";
      element.style.top = y + "px";
      element.style.width = w + "px";
      element.style.height = h + "px";
    }
  }

  window.addEventListener("resize", function() {
    setBounds(pane);
    //if (snapType) resizeEdges();
    //else needsResize = true;
  });

  setBounds(pane);
}

window.Timeliner = Timeliner;

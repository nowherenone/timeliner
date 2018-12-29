var Settings = require("./settings"),
  ViewLayer = require("./view_layer"),
  IconButton = require("./ui_icon_button"),
  style = require("./utils").style,
  Theme = require("./theme"),
  STORAGE_PREFIX = require("./utils").STORAGE_PREFIX,
  UINumber = require("./ui_number");
var layers, x2;

function LayerCabinet(data, dispatcher) {
  var layer_store = data.get("layers");

  var div = document.createElement("div");

  var top = document.createElement("div");
  top.style.cssText =
    "margin: 0px; top: 0; left: 0; height: " +
    Settings.MARKER_TRACK_HEIGHT +
    "px";
  // top.style.textAlign = 'right';

  var layer_scroll = document.createElement("div");
  style(layer_scroll, {
    position: "absolute",
    top: Settings.MARKER_TRACK_HEIGHT + "px",
    // height: (Settings.height - Settings.MARKER_TRACK_HEIGHT) + 'px'
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden"
  });

  div.appendChild(layer_scroll);

  var playing = false;

  var button_styles = {
    width: "22px",
    height: "22px",
    padding: "2px"
  };

  var op_button_styles = {
    width: "32px",
    padding: "3px 4px 3px 4px"
  };

  /*
  var undo_button = new IconButton(16, "undo", "undo", dispatcher);
  style(undo_button.dom, op_button_styles);
  undo_button.onClick(function() {
    dispatcher.fire("controls.undo");
  });

  var redo_button = new IconButton(16, "repeat", "redo", dispatcher);
  style(redo_button.dom, op_button_styles);
  redo_button.onClick(function() {
    dispatcher.fire("controls.redo");
  });
  */

  var range = document.createElement("input");
  range.type = "range";
  range.value = 0;
  range.min = -1;
  range.max = +1;
  range.step = 0.125;

  style(range, {
    width: "90px",
    margin: "0px",
    marginLeft: "2px",
    marginRight: "2px",
    position: "absolute",
    right: "20px",
    top: "5px"
  });

  var draggingRange = 0;

  range.addEventListener("mousedown", function() {
    draggingRange = 1;
  });

  range.addEventListener("mouseup", function() {
    draggingRange = 0;
    changeRange();
  });

  range.addEventListener("mousemove", function() {
    if (!draggingRange) return;
    changeRange();
  });

  div.appendChild(top);

  var time_options = {
    min: 0,
    step: 0.125
  };

  // var currentTime = new UINumber(time_options);
  // var totalTime = new UINumber(time_options);

  var currentTimeStore = data.get("ui:currentTime");
  var totalTimeStore = data.get("ui:totalTime");

  // Play Controls
  var currentTime = document.createElement("span");
  var totalTime = document.createElement("span");
  var timeBlock = document.createElement("div");

  var carTimeBlock = document.createElement("div");
  var carTime = document.createElement("span");
  timeBlock.style =
    "display:inline-block; width : 150px; position: absolute; left:5px;top:5px;";

  timeBlock.appendChild(document.createTextNode("Frames: ")); // 0:00:00 / 0:10:00
  timeBlock.appendChild(currentTime);
  timeBlock.appendChild(document.createTextNode("/")); // 0:00:00 / 0:10:00
  timeBlock.appendChild(totalTime);

  carTimeBlock.appendChild(document.createTextNode("M.Time: ")); // 0:00:00 / 0:10:00
  carTimeBlock.appendChild(carTime);
  carTimeBlock.style =
    "display:inline-block; width : 150px; position: absolute; left:5px;top:20px;";

  top.appendChild(timeBlock);
  top.appendChild(carTimeBlock);

  top.appendChild(range);

  var operations_div = document.createElement("div");
  style(operations_div, {
    marginTop: "25px",
    position: "absolute",
    right: "-10px"
    // borderBottom: '1px solid ' + Theme.b
  });
  top.appendChild(operations_div);

  var play_button = new IconButton(16, "play", "play", dispatcher);
  style(play_button.dom, button_styles, { marginTop: "2px" });
  play_button.onClick(function(e) {
    e.preventDefault();
    dispatcher.fire("controls.toggle_play");
  });

  var stop_button = new IconButton(16, "stop", "stop", dispatcher);
  style(stop_button.dom, button_styles, { marginTop: "2px" });
  stop_button.onClick(function(e) {
    dispatcher.fire("controls.stop");
  });

  operations_div.appendChild(play_button.dom);
  operations_div.appendChild(stop_button.dom);

  // save
  var save = new IconButton(16, "save", "Save", dispatcher);
  style(save.dom, op_button_styles);
  operations_div.appendChild(save.dom);
  save.onClick(function() {
    dispatcher.fire("save");
  });

  // top.appendChild(document.createElement('br'));
  var viewMode = new IconButton(16, "eye_open", "View mode", dispatcher);
  style(viewMode.dom, op_button_styles);
  viewMode.onClick(function() {
    dispatcher.fire("ui.switchMode");
  });
  operations_div.appendChild(viewMode.dom);

  var span = document.createElement("span");
  span.style.width = "20px";
  span.style.display = "inline-block";
  operations_div.appendChild(span);

  //operations_div.appendChild(undo_button.dom);
  //operations_div.appendChild(redo_button.dom);
  operations_div.appendChild(document.createElement("br"));

  // Cloud Download / Upload edit pencil

  // remove layer
  //var minus = new IconButton(16, "minus", "minus", dispatcher);
  //operations_div.appendChild(minus.dom);

  // // show layer
  // var eye_open = new IconButton(16, 'eye_open', 'eye_open', dispatcher);
  // operations_div.appendChild(eye_open.dom);

  // // hide / disable layer
  // var eye_close = new IconButton(16, 'eye_close', 'eye_close', dispatcher);
  // operations_div.appendChild(eye_close.dom);
  /*





	// check
	var ok = new IconButton(16, 'ok', 'ok', dispatcher);
	operations_div.appendChild(ok.dom);

	// cross
	var remove = new IconButton(16, 'remove', 'remove', dispatcher);
	operations_div.appendChild(remove.dom);

	*/

  range.addEventListener("change", changeRange);

  function convertPercentToTime(t) {
    var min_time = 10 * 60; // 10 minutes
    min_time = data.get("ui:totalTime").value;
    var max_time = 1;
    var v = (Settings.width * 0.8) / (t * (max_time - min_time) + min_time);
    return v;
  }

  function convertTimeToPercent(v) {
    var min_time = 10 * 60; // 10 minutes
    min_time = data.get("ui:totalTime").value;
    var max_time = 1;
    var t = ((Settings.width * 0.8) / v - min_time) / (max_time - min_time);
    return t;
  }

  function changeRange() {
    dispatcher.fire("update.scale", Math.pow(100, -range.value));
  }

  var layer_uis = [],
    visible_layers = 0;
  var unused_layers = [];

  this.layers = layer_uis;

  this.setControlStatus = function(v) {
    playing = v;
    if (playing) {
      play_button.setIcon("pause");
      play_button.setTip("pause");
    } else {
      play_button.setIcon("play");
      play_button.setTip("play");
    }
  };

  this.setState = function(state) {
    layer_store = state;
    layers = layer_store.value;
    // layers = state;
    //console.log(layer_uis.length, layers);
    var i, layer;
    for (i = 0; i < layers.length; i++) {
      layer = layers[i];

      if (!layer_uis[i]) {
        var layer_ui;
        if (unused_layers.length) {
          layer_ui = unused_layers.pop();
          layer_ui.dom.style.display = "block";
        } else {
          // new
          layer_ui = new ViewLayer(layer, dispatcher);
          layer_scroll.appendChild(layer_ui.dom);
        }
        layer_uis.push(layer_ui);
      }

      // layer_uis[i].setState(layer);
    }

    /*
    console.log(
      "Total layers (view, hidden, total)",
      layer_uis.length,
      unused_layers.length,
      layer_uis.length + unused_layers.length
    );
    */
  };

  function repaint(s) {
    var current = currentTimeStore.value;
    var total = totalTimeStore.value;

    // currentTime.setValue(s);
    // totalTime.setValue(totalTimeStore.value);
    // currentTime.paint();
    // totalTime.paint();

    currentTime.innerHTML = current ? parseInt(current, 10) : 0;
    totalTime.innerHTML = total ? parseInt(total, 10) : 0;

    carTime.innerHTML = data.get("ui:carTime").value || "N/A";
    var i;

    s = s || 0;
    for (i = layer_uis.length; i-- > 0; ) {
      // quick hack
      if (i >= layers.length) {
        layer_uis[i].dom.style.display = "none";
        unused_layers.push(layer_uis.pop());
        continue;
      }

      layer_uis[i].setState(layers[i], layer_store.get(i));
      layer_uis[i].repaint(s);
    }

    visible_layers = layer_uis.length;
  }

  this.repaint = repaint;
  this.setState(layer_store);

  this.scrollTo = function(x) {
    layer_scroll.scrollTop =
      x * (layer_scroll.scrollHeight - layer_scroll.clientHeight);
  };

  this.scrollBy = function(s) {
    layer_scroll.scrollTop = s;
    return layer_scroll.scrollTop;
  };

  this.dom = div;

  repaint();
}

module.exports = LayerCabinet;

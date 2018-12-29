var Theme = require("./theme"),
  UINumber = require("./ui_number"),
  IconButton = require("./ui_icon_button"),
  Tweens = require("./util_tween"),
  Settings = require("./settings"),
  utils = require("./utils");
// TODO - tagged by index instead, work off layers.

function LayerView(layer, dispatcher) {
  var dom = document.createElement("div");

  var label = document.createElement("span");

  label.style.cssText =
    "font-size: 12px; padding: 4px; top: 1px; position: relative; width: 210px; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; display: inline-block;";

  var height = Settings.LINE_HEIGHT - 1;

  //keyframe_button

  /*
  var trash = new IconButton(12, "trash", "Delete save", dispatcher);
  trash.onClick(function() {
    let layers = layer_store.value || [];
    dispatcher.fire("controls.deleteLayer", layers.find(l => l.selected));
  });
  style(trash.dom, button_styles, { marginRight: "2px" });
  bottom_right.appendChild(trash.dom);
  */

  var keyframe_button = document.createElement("button");
  keyframe_button.innerHTML = "&#9672;"; // '&diams;' &#9671; 9679 9670 9672
  keyframe_button.setAttribute("class", "TimelineWrapper KeyframeButton");
  keyframe_button.addEventListener(
    "click",
    function(e) {
      dispatcher.fire("keyframe", layer, state.get("_value").value);
      e.preventDefault();
      e.stopPropagation();
    },
    false
  );

  var delete_button = new IconButton(12, "trash", "Delete cuboid", dispatcher);
  delete_button.dom.setAttribute("class", "TimelineWrapper DeleteButton");
  delete_button.dom.addEventListener(
    "click",
    function(e) {
      dispatcher.fire("controls.deleteLayer", layer.name);
      e.preventDefault();
      e.stopPropagation();
    },
    false
  );

  var merge_button = new IconButton(12, "signin", "Merge cuboid", dispatcher);
  merge_button.dom.setAttribute("class", "TimelineWrapper MergeButton");
  merge_button.dom.addEventListener(
    "click",
    function(e) {
      dispatcher.fire("controls.mergeLayer", layer.name);
      e.preventDefault();
      e.stopPropagation();
    },
    false
  );

  /*delete_button.onClick(function() {
    dispatcher.fire("controls.deleteLayer", layer.name);
  });*/

  dom.appendChild(label);
  dom.appendChild(keyframe_button);
  dom.appendChild(delete_button.dom);
  dom.appendChild(merge_button.dom);
  dom.setAttribute("class", "TimelineWrapper LayerName");

  utils.style(dom, {
    textAlign: "left",
    margin: "0px 0px 0px 0px",
    cursor: "pointer",
    paddingLeft: "5px",
    borderBottom: "1px solid " + Theme.b,
    top: 0,
    left: 0,
    height: Settings.LINE_HEIGHT - 1 + "px"
    //color: Theme.c
  });

  //this.selectLayer = layerName => {

  dom.addEventListener("click", e => {
    //console.log("select.layer", this.labelId);
    dispatcher.fire("select.layer", this.labelId);
  });

  this.dom = dom;

  this.repaint = repaint;
  var state;

  this.setState = (l, s) => {
    layer = l;
    state = s;

    var tmp_value = state.get("_value");
    if (tmp_value.value === undefined) {
      tmp_value.value = 0;
    }

    this.labelId = state.get("name").value;
    //number.setValue(tmp_value.value);
    //console.log(state);
    label.textContent = state.get("label").value || state.get("name").value;

    // If this is a selected layer
    if (state.get("selected").value) {
      dom.setAttribute("class", "TimelineWrapper LayerName Selected");
    } else {
      dom.setAttribute("class", "TimelineWrapper LayerName");
    }

    repaint();
  };

  function repaint(s) {
    return;
    //keyframe_button.style.color = Theme.b;
    //var o = utils.timeAtLayer(layer, s);
    /*
    if (!o) return;

    //if (o.keyframe) {
    keyframe_button.style.color = Theme.c;
    // keyframe_button.disabled = true;
    // keyframe_button.style.borderStyle = 'inset';
    // }

    state.get("_value").value = o.value;
    //number.setValue(o.value);
    //number.paint();

    dispatcher.fire("target.notify", layer.name, o.value);
    */
  }
}

module.exports = LayerView;

var Theme = require("./theme"),
  UINumber = require("./ui_number"),
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

  var keyframe_button = document.createElement("button");
  keyframe_button.innerHTML = "&#9672;"; // '&diams;' &#9671; 9679 9670 9672
  keyframe_button.style.cssText =
    "background: none; font-size: 12px; padding: 0px; font-family: monospace; float: right; width: 20px; height: " +
    height +
    "px; border-style:none; outline: none;position: relative;top: 1px;cursor:pointer;color:" +
    Theme.c +
    ";"; //  border-style:inset;

  keyframe_button.addEventListener("click", function(e) {
    console.log("clicked:keyframing...", state.get("_value").value);
    dispatcher.fire("keyframe", layer, state.get("_value").value);
  });

  dom.appendChild(label);
  dom.appendChild(keyframe_button);

  utils.style(dom, {
    textAlign: "left",
    margin: "0px 0px 0px 0px",
    paddingLeft: "5px",
    borderBottom: "1px solid " + Theme.b,
    top: 0,
    left: 0,
    height: Settings.LINE_HEIGHT - 1 + "px",
    color: Theme.c
  });

  this.dom = dom;

  this.repaint = repaint;
  var state;

  this.setState = function(l, s) {
    layer = l;
    state = s;

    var tmp_value = state.get("_value");
    if (tmp_value.value === undefined) {
      tmp_value.value = 0;
    }

    //number.setValue(tmp_value.value);
    //console.log(state);
    label.textContent = state.get("label").value || state.get("name").value;

    // If this is a selected layer
    if (state.get("selected").value) {
      utils.style(dom, { background: "#000" });
    } else {
      utils.style(dom, { background: Theme.a });
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

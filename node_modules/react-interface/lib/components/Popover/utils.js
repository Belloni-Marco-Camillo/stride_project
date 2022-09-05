"use strict";

exports.__esModule = true;
exports.default = calculatePosition;
/* Algo to calculate position
  1. center position for popup content : the center of the trigger will be the center of the content content
      so the popup content position will be like this :
      top => the y of the center for the trigger element : trigger.top + trigger.height/2
      left => the x of the center for the trigger element : trigger.left + trigger.width/2

  2. translate position according to the first  position attribute  passed  in the function argument
      for example :
        position = 'left top'
        we need to handle the first argument in the position: 'left' => that's mean we need to translate the popup content according to the X axis by - content.width/2

  3.translate position according to the first  position attribute  passed  in the function argument
    for example :
      position = 'left top'
      the second argument 'top' => translate popup content by + content.height*4/5

*/

function calculatePosition(triggerBounding, ContentBounding, position, arrow, offset) {
  var style = {};
  var margin = arrow ? 8 : 0;
  var totalMargin = margin + offset;
  var args = position.split(" ");
  // the step N 1 : center the popup content => ok
  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;

  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = "";
  var arrowTop = "0%";
  var arrowLeft = "0%";
  // the  step N 2 : => ok
  switch (args[0]) {
    case "top":
      top -= height / 2 + triggerBounding.height / 2 + totalMargin;
      transform = "rotate(45deg)";
      arrowTop = "100%";
      arrowLeft = "50%";
      break;
    case "bottom":
      top += height / 2 + triggerBounding.height / 2 + totalMargin;
      transform = "rotate(225deg)";
      arrowLeft = "50%";
      break;
    case "left":
      left -= width / 2 + triggerBounding.width / 2 + totalMargin;
      transform = " rotate(-45deg)";
      arrowLeft = "100%";
      arrowTop = "50%";
      break;
    case "right":
      left += width / 2 + triggerBounding.width / 2 + totalMargin;
      transform = "rotate(135deg)";
      arrowTop = "50%";

      break;
  }
  switch (args[1]) {
    case "top":
      top = triggerBounding.top;
      arrowTop = triggerBounding.height / 2 + "px";
      break;
    case "bottom":
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = height - triggerBounding.height / 2 + "px";
      break;
    case "left":
      left = triggerBounding.left;
      arrowLeft = triggerBounding.width / 2 + "px";
      break;
    case "right":
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = width - triggerBounding.width / 2 + "px";
      break;
  }

  return { top: top, left: left, transform: transform, arrowLeft: arrowLeft, arrowTop: arrowTop };
}
module.exports = exports["default"];
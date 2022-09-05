'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Thank you erikras: https://github.com/erikras/styled-components-theme
// and jxnblk: https://github.com/jxnblk/monochrome/blob/master/src/palette.js


exports.getColorShades = getColorShades;
exports.getPaletteShades = getPaletteShades;
exports.colorListToMap = colorListToMap;

var _chromaJs = require('chroma-js');

var _chromaJs2 = _interopRequireDefault(_chromaJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDark = function isDark(color) {
  return (0, _chromaJs2.default)(color).luminance() < 0.5;
};

function getColorShades(color, colorName) {
  var steps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;

  var colorList = [];
  var scaleSourceHex = color;

  // Prepare color scale.
  var colors = ['#fff', scaleSourceHex, '#000'];
  var scale = _chromaJs2.default.scale(colors).mode('lab');
  // Output source color.
  for (var i = 0, steps = steps; i < steps; i++) {
    var point = i / steps;
    // Convert point to numbering system value.
    var name = Math.round(point * 1000);
    // Generate RGB color from luminance location along scale.
    var hex = scale(point).hex();
    colorList.push(hex);
  }

  colorList[4] = color;

  return colorList;
}

if (typeof window !== 'undefined') {
  window.getColorShades = getColorShades;
}

function getPaletteShades(palette) {
  return Object.keys(palette).map(function (p) {
    return getColorShades(palette[p], p);
  }).reduce(function (acc, curr) {
    return _extends({}, acc, curr);
  });
}

function colorListToMap(colors) {
  var palette = {};

  var _loop = function _loop(color) {
    if (typeof colors[color] === 'string') {
      palette[color] = colors[color];
    } else {
      var shades = colors[color].reduce(function (acc, curr, i) {
        acc['' + color + i] = curr;
        return acc;
      }, {});
      palette = _extends({}, palette, shades);
    }
  };

  for (var color in colors) {
    _loop(color);
  }
  return palette;
}
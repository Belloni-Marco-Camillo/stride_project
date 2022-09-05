'use strict';

exports.__esModule = true;
exports.createShades = exports.createBlack = undefined;

var _chromaJs = require('chroma-js');

var _chromaJs2 = _interopRequireDefault(_chromaJs);

var _hueName = require('./hue-name');

var _hueName2 = _interopRequireDefault(_hueName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHues = function createHues() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;

  var hueLength = length;
  var hueStep = 360 / hueLength;
  return function (base) {
    var hues = Array.from({ length: hueLength }).map(function (n, i) {
      return Math.floor((base + i * hueStep) % 360);
    });

    return hues;
  };
};

var desat = function desat(n) {
  return function (hex) {
    var _chroma$hsl = (0, _chromaJs2.default)(hex).hsl(),
        h = _chroma$hsl[0],
        s = _chroma$hsl[1],
        l = _chroma$hsl[2];

    return _chromaJs2.default.hsl(h, n, l).hex();
  };
};

var createBlack = exports.createBlack = function createBlack(hex) {
  var d = desat(1 / 8)(hex);
  return (0, _chromaJs2.default)(d).luminance(.05).hex();
};

var createShades = exports.createShades = function createShades(hex, steps) {
  var lums = Array(steps).fill().map(function (a, i) {
    return i;
  }).reverse().map(function (n) {
    return n + steps / (steps / .3);
  }).map(function (n) {
    return n / steps;
  });
  return lums.map(function (lum) {
    return (0, _chromaJs2.default)(hex).luminance(lum).hex();
  });
};

// Mappers
var toHex = function toHex(_ref) {
  var key = _ref.key,
      value = _ref.value;
  return { key: key, value: value.hex() };
};

var keyword = function keyword(hex) {
  var _chroma$hsl2 = (0, _chromaJs2.default)(hex).hsl(),
      hue = _chroma$hsl2[0],
      sat = _chroma$hsl2[1];

  if (sat < .5) {
    return 'gray';
  }
  var name = (0, _hueName2.default)(hue);
  return name;
};

// Reducer
var toObj = function toObj() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var color = arguments[1];

  var key = a[color.key] ? color.key + '2' : color.key;
  a[key] = color.value;
  return a;
};

var palx = function palx(hex) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { steps: 10 };

  var color = (0, _chromaJs2.default)(hex);
  var colors = [];

  var _color$hsl = color.hsl(),
      hue = _color$hsl[0],
      sat = _color$hsl[1],
      lte = _color$hsl[2];

  var hues = createHues(12)(hue);

  colors.push({
    key: 'black',
    value: createBlack('' + color.hex())
  });

  colors.push({
    key: 'gray',
    value: createShades(desat(1 / 8)('' + color.hex()), options.steps)
  });

  hues.forEach(function (h) {
    var c = _chromaJs2.default.hsl(h, sat, lte);
    var key = keyword(c);
    colors.push({
      key: key,
      value: createShades('' + c.hex(), options.steps)
    });
  });

  var obj = Object.assign({
    base: hex
  }, colors.reduce(toObj, {}));

  return obj;
};

exports.default = palx;
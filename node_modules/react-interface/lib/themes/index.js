'use strict';

exports.__esModule = true;

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _light = require('./light');

var _light2 = _interopRequireDefault(_light);

var _dark = require('./dark');

var _dark2 = _interopRequireDefault(_dark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  base: _base2.default,
  light: _light2.default,
  dark: _dark2.default
};
module.exports = exports['default'];
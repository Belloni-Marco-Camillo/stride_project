'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * React UI Dark Theme
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

var _base = require('../base');

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, (0, _base.createTheme)(_colors2.default));
module.exports = exports['default'];
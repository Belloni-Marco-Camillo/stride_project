'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  ', '\n  ', '\n'], ['\n  font-size: ', ';\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Pre = _styledComponents2.default.pre(_templateObject, function (props) {
  return props.theme.sizes.fonts[props.size];
}, _styledSystem.space, _styledSystem.color);

exports.default = Pre;
module.exports = exports['default'];
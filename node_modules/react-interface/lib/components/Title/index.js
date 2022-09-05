'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-size: ', ';\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  font-size: ', ';\n  margin: 0;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Title = _styledComponents2.default.h2(_templateObject, function (props) {
  return props.theme.sizes.fonts[props.size];
}, _styledSystem.space, _styledSystem.color, _styledSystem.borderWidth, _styledSystem.borderColor, _styledSystem.borderRadius);

Title.defaultProps = {
  size: 'md'
};

exports.default = Title;
module.exports = exports['default'];
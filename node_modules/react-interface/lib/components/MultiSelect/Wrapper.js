'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  background: ', ';\n  border: 1px solid ', ';\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  height: 100%;\n  padding: 10px;\n  position: relative;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:focus {\n    border: 1px solid ', ';\n    outline: none;\n  }\n\n  ', '\n  ', '\n\n  svg {\n    color: ', ';\n  }\n'], ['\n  background: ', ';\n  border: 1px solid ', ';\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  height: 100%;\n  padding: 10px;\n  position: relative;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:focus {\n    border: 1px solid ', ';\n    outline: none;\n  }\n\n  ', '\n  ', '\n\n  svg {\n    color: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.colors.multiSelectBackground;
}, function (props) {
  return props.theme.colors.multiSelectBorder;
}, _styledSystem.space, _styledSystem.width, _styledSystem.borderRadius, _styledSystem.color, _styledSystem.borders, _styledSystem.borderColor, function (props) {
  return props.theme.colors.multiSelectFocusBorder;
}, _styledSystem.focus, _styledSystem.hover, function (props) {
  return props.theme.colors.multiSelectIcon;
});

Wrapper.defaultProps = {
  p: 2,
  color: 'multiSelect',
  bg: 'multiSelectBackground',
  borderColor: 'multiSelectBorder',
  borderRadius: 2,
  border: '1px solid',
  hover: {
    color: 'multiSelectHover',
    backgroundColor: 'multiSelectHoverBackground'
  }
};

exports.default = Wrapper;
module.exports = exports['default'];
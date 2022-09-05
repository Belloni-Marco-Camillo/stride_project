'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  svg {\n    color: ', ';\n  }\n\n  &:focus {\n    border: 1px solid ', ';\n    outline: none;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  svg {\n    color: ', ';\n  }\n\n  &:focus {\n    border: 1px solid ', ';\n    outline: none;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Wrapper = _styledComponents2.default.div(_templateObject, _styledSystem.space, _styledSystem.width, _styledSystem.borderRadius, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.color, _styledSystem.hover, function (props) {
  return props.theme.colors.selectIcon;
}, function (props) {
  return props.theme.colors.selectFocusBorder;
});

Wrapper.defaultProps = {
  p: 2,
  color: 'select',
  bg: 'selectBackground',
  borderColor: 'selectBorder',
  borderRadius: 2,
  border: '1px solid',
  hover: {
    color: 'selectHover',
    backgroundColor: 'selectHoverBackground'
  }
};

exports.default = Wrapper;
module.exports = exports['default'];
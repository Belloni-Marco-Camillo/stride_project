'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  background: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  color: ', ';\n  background: ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Menu = _styledComponents2.default.ul(_templateObject, function (props) {
  return props.theme['menu.color'];
}, function (props) {
  return props.theme['menu.background'];
}, _styledSystem.borderRadius, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.space, _styledSystem.color);

Menu.defaultProps = {
  borderRadius: 4,
  p: 2

  /** @component */
};exports.default = Menu;
module.exports = exports['default'];
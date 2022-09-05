'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  border-top: 1px solid ', ';\n  ', '\n  ', '\n  ', '\n'], ['\n  border-top: 1px solid ', ';\n  ', '\n  ', '\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MenuDivider = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme['menu.divider.border.color'];
}, _styledSystem.borderColor, _styledSystem.borders, _styledSystem.space);

MenuDivider.defaultProps = {
  my: 1,
  mx: 2

  /** @component */
};exports.default = MenuDivider;
module.exports = exports['default'];
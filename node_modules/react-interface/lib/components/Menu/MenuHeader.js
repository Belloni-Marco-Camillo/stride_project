'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  font-weight: bold;\n  ', ' ', ';\n'], ['\n  color: ', ';\n  font-weight: bold;\n  ', ' ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MenuHeader = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme['menu.header.color'];
}, _styledSystem.space, _styledSystem.fontSize);

MenuHeader.defaultProps = {
  p: 2

  /** @component */
};exports.default = MenuHeader;
module.exports = exports['default'];
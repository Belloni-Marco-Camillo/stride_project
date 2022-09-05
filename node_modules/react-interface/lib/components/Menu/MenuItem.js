'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  display: block;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: ', ';\n  cursor: pointer;\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:hover {\n    background: ', ';\n    color: ', ';\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n'], ['\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n  display: block;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  color: ', ';\n  cursor: pointer;\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:hover {\n    background: ', ';\n    color: ', ';\n  }\n\n  ', '\n\n  ', '\n\n  ', '\n\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      background: ', ';\n      color: ', ';\n    '], ['\n      background: ', ';\n      color: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n      font-size: ', ';\n    '], ['\n      font-size: ', ';\n    ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var MenuItem = _styledComponents2.default.li(_templateObject, function (props) {
  return props.theme['menu.item.color'];
}, _styledSystem.borderRadius, _styledSystem.space, _styledSystem.fontSize, _styledSystem.color, function (props) {
  return props.theme['menu.item.hover.background'];
}, function (props) {
  return props.theme['menu.item.hover.color'];
}, _styledSystem.hover, function (props) {
  return props.active && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.theme['menu.item.active.background'];
  }, function (props) {
    return props.theme['menu.item.active.color'];
  });
}, function (props) {
  return props.large && (0, _styledComponents.css)(_templateObject3, function (props) {
    return props.theme.sizes.fonts.large;
  });
});

MenuItem.defaultProps = {
  borderRadius: 2,
  p: 2

  /** @component */
};exports.default = MenuItem;
module.exports = exports['default'];
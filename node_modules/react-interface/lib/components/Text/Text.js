'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-block;\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: inline-block;\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: ', 'px;\n    '], ['\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      max-width: ', 'px;\n    ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Text = _styledComponents2.default.span(_templateObject, function (props) {
  return props.max && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.max;
  });
}, _styledSystem.color, _styledSystem.space, _styledSystem.alignSelf, _styledSystem.fontWeight, _styledSystem.letterSpacing, _styledSystem.lineHeight, _styledSystem.fontSize, _styledSystem.textAlign);

/** @component */
exports.default = Text;
module.exports = exports['default'];
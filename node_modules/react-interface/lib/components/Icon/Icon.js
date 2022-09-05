'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  // display: inline-flex;\n  display: inline-block;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  // display: inline-flex;\n  display: inline-block;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _reactFeather = require('react-feather');

var feathers = _interopRequireWildcard(_reactFeather);

var _icons = require('../../icons');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var icons = _extends({}, feathers, {
  Caret: _icons.Caret
});

var capitalize = function capitalize(type) {
  return type.charAt(0).toUpperCase() + type.substring(1);
};

var Wrapper = _styledComponents2.default.div(_templateObject, _styledSystem.space, _styledSystem.width, _styledSystem.alignSelf, _styledSystem.color, _styledSystem.fontSize, _styledSystem.hover);

var Icon = function Icon(_ref) {
  var type = _ref.type,
      size = _ref.size,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ['type', 'size', 'color']);

  return _react2.default.createElement(
    Wrapper,
    _extends({ className: 'ri-icon', size: size, color: color }, rest),
    _react2.default.createElement(icons[type.split('-').map(function (t) {
      return capitalize(t);
    }).join('')], { size: size })
  );
};

exports.default = Icon;
module.exports = exports['default'];
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Caret = function Caret(_ref) {
  var color = _ref.color,
      height = _ref.height,
      width = _ref.width,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      onClick = _ref.onClick,
      _ref$degrees = _ref.degrees,
      degrees = _ref$degrees === undefined ? 0 : _ref$degrees,
      className = _ref.className;
  return _react2.default.createElement(
    'svg',
    { onClick: onClick, className: className, style: _extends({}, style, { transform: 'rotate(' + degrees + 'deg)' }), width: width || 24, height: height || 24, viewBox: '0 0 24 24' },
    _react2.default.createElement('path', { fill: color, d: 'M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z' })
  );
};

Caret.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes2.default.string,
  height: _propTypes2.default.number,
  width: _propTypes2.default.number,
  degrees: _propTypes2.default.number,
  style: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string
} : {};

exports.default = Caret;
module.exports = exports['default'];
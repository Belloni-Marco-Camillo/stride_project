'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  from {transform: rotate(0deg)}\n  to {transform: rotate(360deg)}\n'], ['\n  from {transform: rotate(0deg)}\n  to {transform: rotate(360deg)}\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  ', ' svg {\n    ', ' transition-property: transform;\n    animation-name: ', ';\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    color: ', ';\n    ', ';\n  }\n'], ['\n  ', ' svg {\n    ', ' transition-property: transform;\n    animation-name: ', ';\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    color: ', ';\n    ', ';\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; } // Could make a timber one: https://codepen.io/zsherman/pen/JMQzjJ for inspiration


var spin = (0, _styledComponents.keyframes)(_templateObject);

function speedSwitch(speed) {
  if (speed === 'fast') return 600;
  if (speed === 'slow') return 900;
  return 750;
}

var Wrapper = _styledComponents2.default.div(_templateObject2, _styledSystem.space, _styledSystem.width, spin, function (props) {
  return props.theme.colors.spinner;
}, _styledSystem.color);

var Spinner = function Spinner(_ref) {
  var color = _ref.color,
      speed = _ref.speed,
      gap = _ref.gap,
      thickness = _ref.thickness,
      size = _ref.size,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ['color', 'speed', 'gap', 'thickness', 'size', 'style']);

  return _react2.default.createElement(
    Wrapper,
    _extends({ color: color, speed: speed, style: style, fontSize: size }, rest),
    _react2.default.createElement(
      'svg',
      {
        style: { animationDuration: speedSwitch(speed) + 'ms' },
        role: 'img',
        'aria-labelledby': 'title desc',
        viewBox: '0 0 32 32',
        stroke: 'currentColor'
      },
      _react2.default.createElement('circle', {
        role: 'presentation',
        cx: 16,
        cy: 16,
        r: 14 - thickness / 2,
        fill: 'none',
        strokeWidth: thickness,
        strokeDasharray: Math.PI * 2 * (11 - gap),
        strokeLinecap: 'round'
      })
    )
  );
};

Spinner.propTypes = process.env.NODE_ENV !== "production" ? {
  color: _propTypes2.default.string,
  thickness: _propTypes2.default.oneOf([1, 2, 3, 4, 5, 6, 7, 8]).isRequired,
  gap: _propTypes2.default.oneOf([1, 2, 3, 4, 5]).isRequired,
  speed: _propTypes2.default.oneOf(['fast', 'slow']),
  height: _propTypes2.default.number,
  width: _propTypes2.default.number
} : {};

Spinner.defaultProps = {
  color: 'spinner',
  gap: 4,
  thickness: 4,
  height: 20,
  width: 20,
  speed: 'fast'
};

exports.default = Spinner;
module.exports = exports['default'];
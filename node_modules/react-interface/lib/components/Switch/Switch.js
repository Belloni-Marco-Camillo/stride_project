'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  appearance: none;\n  -webkit-perspective: 1000;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  height: ', 'px;\n  width: ', 'px;\n  ', '\n\n  &:before, &:after {\n    position: absolute;\n    color: #ddd;\n    top: 8px;\n    font-size: 13px;\n    font-weight: 700;\n  }\n\n  &:before {\n    left: -19px;\n    content: attr(data-text);\n  }\n\n  &:after {\n    right: -17px;\n    content: attr(data-text);\n  }\n\n  input {\n    display: none;\n  }\n\n  input + label {\n    display: block;\n    position: absolute;\n    cursor: pointer;\n    user-select: none;\n    height: 100%;\n    width: ', 'px;\n\n    &:before,\n    &:after {\n      content: \'\';\n      position: absolute;\n      border-radius: 30px;\n      transition: all 0.25s ease-in-out;\n    }\n\n    &:before {\n      height: ', 'px;\n      width: ', 'px;\n      ', ';\n    }\n\n    &:after {\n      width: ', 'px;\n      height: 90%;\n      transform: translate(5%, 5%);\n      ', '\n    }\n  }\n\n  input:checked + label:after {\n    transition: all 0.25s ease-in-out;\n    transform: translate(95%, 5%);\n  }\n\n  input:checked + label:before {\n    ', '\n  }\n'], ['\n  position: relative;\n  display: inline-block;\n  outline: 0;\n  appearance: none;\n  -webkit-perspective: 1000;\n  -webkit-backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  height: ', 'px;\n  width: ', 'px;\n  ', '\n\n  &:before, &:after {\n    position: absolute;\n    color: #ddd;\n    top: 8px;\n    font-size: 13px;\n    font-weight: 700;\n  }\n\n  &:before {\n    left: -19px;\n    content: attr(data-text);\n  }\n\n  &:after {\n    right: -17px;\n    content: attr(data-text);\n  }\n\n  input {\n    display: none;\n  }\n\n  input + label {\n    display: block;\n    position: absolute;\n    cursor: pointer;\n    user-select: none;\n    height: 100%;\n    width: ', 'px;\n\n    &:before,\n    &:after {\n      content: \'\';\n      position: absolute;\n      border-radius: 30px;\n      transition: all 0.25s ease-in-out;\n    }\n\n    &:before {\n      height: ', 'px;\n      width: ', 'px;\n      ', ';\n    }\n\n    &:after {\n      width: ', 'px;\n      height: 90%;\n      transform: translate(5%, 5%);\n      ', '\n    }\n  }\n\n  input:checked + label:after {\n    transition: all 0.25s ease-in-out;\n    transform: translate(95%, 5%);\n  }\n\n  input:checked + label:before {\n    ', '\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var onBackground = (0, _styledSystem.style)({
  prop: 'onBg',
  cssProperty: 'backgroundColor',
  key: 'colors'
});

var offBackground = (0, _styledSystem.style)({
  prop: 'offBg',
  cssProperty: 'backgroundColor',
  key: 'colors'
});

var knobBackground = (0, _styledSystem.style)({
  prop: 'knobBg',
  cssProperty: 'backgroundColor',
  key: 'colors'
});

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.dimensions[props.theme.sizes[props.size]];
}, function (props) {
  return props.theme.dimensions[props.theme.sizes[props.size]] * 2;
}, _styledSystem.space, function (props) {
  return props.theme.dimensions[props.theme.sizes[props.size]] * 2;
}, function (props) {
  return props.theme.dimensions[props.theme.sizes[props.size]];
}, function (props) {
  return props.theme.dimensions[props.theme.sizes[props.size]] * 2;
}, offBackground, function (props) {
  return props.theme.dimensions[props.theme.sizes[props.size]];
}, knobBackground, onBackground);

var Switch = function Switch(_ref) {
  var on = _ref.on,
      onChange = _ref.onChange,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ['on', 'onChange', 'id']);

  return _react2.default.createElement(
    Wrapper,
    rest,
    _react2.default.createElement('input', { type: 'checkbox', id: id, checked: on, onChange: onChange }),
    _react2.default.createElement('label', { htmlFor: id })
  );
};

Switch.propTypes = process.env.NODE_ENV !== "production" ? {
  on: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  id: _propTypes2.default.string,
  size: _propTypes2.default.string
} : {};

Switch.defaultProps = {
  id: 'ri-check',
  on: true,
  size: 'md',
  onBg: 'switchOnBackground',
  offBg: 'switchOffBackground',
  knobBg: 'switchKnobBackground'
};

exports.default = Switch;
module.exports = exports['default'];
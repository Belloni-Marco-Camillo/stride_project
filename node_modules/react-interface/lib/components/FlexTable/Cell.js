'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-direction: ', ';\n  flex-wrap: ', ';\n  flex-grow: ', ';\n  flex-shrink: ', ';\n  flex-basis: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n  padding: 0.5em;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0px;\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-direction: ', ';\n  flex-wrap: ', ';\n  flex-grow: ', ';\n  flex-shrink: ', ';\n  flex-basis: ', ';\n  justify-content: ', ';\n  align-items: ', ';\n  padding: 0.5em;\n  word-break: break-word;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0px;\n  ', '\n  ', '\n']);

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

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.direction;
}, function (props) {
  return props.wrap;
}, function (props) {
  return props.grow;
}, function (props) {
  return props.shrink;
}, function (props) {
  return props.basis;
}, function (props) {
  return props.justify;
}, function (props) {
  return props.align;
}, _styledSystem.space, _styledSystem.width);

var Cell = function Cell(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    children
  );
};

Cell.defaultProps = {
  grow: 1,
  shrink: 1,
  basis: 'auto',
  align: 'initial',
  justify: 'start',
  wrap: 'nowrap',
  direction: 'row'
};

Cell.propTypes = process.env.NODE_ENV !== "production" ? {
  grow: _propTypes2.default.number,
  basis: _propTypes2.default.any,
  align: _propTypes2.default.string,
  children: _propTypes2.default.node,
  justify: _propTypes2.default.string,
  wrap: _propTypes2.default.string,
  direction: _propTypes2.default.string
} : {};

exports.default = Cell;
module.exports = exports['default'];
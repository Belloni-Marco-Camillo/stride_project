'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n'], ['\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Wrapper = _styledComponents2.default.div(_templateObject);

var TBody = function TBody(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    Wrapper,
    null,
    children
  );
};

TBody.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node
} : {};

exports.default = TBody;
module.exports = exports['default'];
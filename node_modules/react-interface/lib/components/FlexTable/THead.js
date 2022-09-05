'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  white-space: normal;\n  font-weight: bold;\n'], ['\n  white-space: normal;\n  font-weight: bold;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var HeaderCell = (0, _styledComponents2.default)(_Cell2.default)(_templateObject);

var THead = function THead(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    HeaderCell,
    props,
    children
  );
};

THead.defaultProps = {
  grow: 1
};

THead.propTypes = process.env.NODE_ENV !== "production" ? {
  grow: _propTypes2.default.number,
  children: _propTypes2.default.node
} : {};

exports.default = THead;
module.exports = exports['default'];
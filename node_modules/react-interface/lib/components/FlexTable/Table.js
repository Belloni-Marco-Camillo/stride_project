'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: .8rem;\n  margin: 0.5rem;\n  line-height: 1.5;\n  flex: 1 1 auto;\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  display: flex;\n  flex-flow: column nowrap;\n  font-size: .8rem;\n  margin: 0.5rem;\n  line-height: 1.5;\n  flex: 1 1 auto;\n  ', '\n  ', '\n  ', '\n  ', '\n']);

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

var Wrapper = _styledComponents2.default.div(_templateObject, _styledSystem.space, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius);

var Table = function Table(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    children
  );
};

Table.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node
} : {};

exports.default = Table;
module.exports = exports['default'];
'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  border-bottom: 1px solid ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  border-bottom: 1px solid ', ';\n  ', '\n  ', '\n  ', '\n  ', '\n']);

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
  return props.theme.colors.border;
}, _styledSystem.space, _styledSystem.borders, _styledSystem.borderColor, _styledSystem.borderRadius);

var Header = function Header(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ['children']);

  return _react2.default.createElement(
    Wrapper,
    props,
    children
  );
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node
} : {};

Header.defaultProps = {
  borderBottom: '1px solid',
  borderColor: 'border'
};

exports.default = Header;
module.exports = exports['default'];
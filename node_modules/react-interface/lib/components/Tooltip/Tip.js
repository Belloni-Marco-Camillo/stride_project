'use strict';

exports.__esModule = true;
exports.default = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: fixed;\n  padding: 8px;\n  background: #333;\n  color: white;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  color: ', ';\n  background: ', ';\n  ', ' ', ';\n'], ['\n  position: fixed;\n  padding: 8px;\n  background: #333;\n  color: white;\n  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);\n  text-align: center;\n  color: ', ';\n  background: ', ';\n  ', ' ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledSystem = require('styled-system');

var _gridStyled = require('grid-styled');

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Wrapper = _gridStyled.Box.extend(_templateObject, function (props) {
  return props.theme.colors['tooltip.color'];
}, function (props) {
  return props.theme.colors['tooltip.background'];
}, _styledSystem.fontSize, _styledSystem.color);

var Tip = function (_PureComponent) {
  _inherits(Tip, _PureComponent);

  function Tip() {
    _classCallCheck(this, Tip);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Tip.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        rest = _objectWithoutProperties(_props, ['children']);

    return _react2.default.createElement(
      Wrapper,
      rest,
      children
    );
  };

  return Tip;
}(_react.PureComponent);

exports.default = Tip;
Tip.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node
} : {};
module.exports = exports['default'];
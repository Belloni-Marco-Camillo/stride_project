'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Tip = require('./Tip');

var _Tip2 = _interopRequireDefault(_Tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = function (_React$PureComponent) {
  _inherits(Tooltip, _React$PureComponent);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, _React$PureComponent.call(this, props));

    _this.show = function () {
      var _this$props = _this.props,
          _this$props$position = _this$props.position,
          position = _this$props$position === undefined ? 'top' : _this$props$position,
          smart = _this$props.smart;

      var style = { width: _this.width, zIndex: 9999 };
      var dimensions = _this.el.getBoundingClientRect();
      var x = dimensions.x,
          y = dimensions.y,
          width = dimensions.width,
          height = dimensions.height,
          left = dimensions.left,
          right = dimensions.right,
          top = dimensions.top,
          bottom = dimensions.bottom;

      // center align the tooltip by taking both the target and tooltip widths into account

      if (position === 'bottom' || position === 'top') {
        style.left = left + width / 2 - _this.width / 2;
        style.left = Math.max(_this.space, style.left); // make sure it doesn't poke off the left side of the page
        style.left = Math.min(style.left, document.body.clientWidth - _this.width - _this.space); // or off the right
      }

      if (position === 'left') {
        style.left = left;
      }

      if (position === 'top') {
        style.bottom = window.innerHeight - top + _this.space;
      }

      if (position === 'bottom') {
        style.top = top + height + _this.space;
      }

      // Use smart positioning to determine tooltip location
      if (smart) {
        if (top < window.innerHeight / 2) {
          style.top = top + height + _this.space;
          style.bottom = undefined;
        } else {
          style.bottom = window.innerHeight - top + _this.space;
          style.top = undefined;
        }
      }

      _this.setState({
        visible: true,
        style: style
      });
    };

    _this.hide = function () {
      _this.setState({ visible: false });
    };

    _this.state = {
      visible: false
    };

    _this.width = props.width || 256;
    _this.space = props.space || 16;
    return _this;
  }

  Tooltip.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      'span',
      {
        onMouseOver: this.show,
        onMouseOut: this.hide,
        className: 'tooltip-trigger-text',
        ref: function ref(el) {
          return _this2.el = el;
        },
        style: { cursor: this.props.cursor || 'pointer' }
      },
      this.props.children,
      this.state.visible && _react2.default.createElement(
        _Portal2.default,
        null,
        _react2.default.createElement(
          _Tip2.default,
          { className: 'tooltip-body', style: this.state.style },
          this.props.content
        )
      )
    );
  };

  return Tooltip;
}(_react2.default.PureComponent);

exports.default = Tooltip;
module.exports = exports['default'];
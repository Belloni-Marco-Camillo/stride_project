'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _popoverCss = require('./popover.css.js');

var _popoverCss2 = _interopRequireDefault(_popoverCss);

var _reactShow = require('react-show');

var _reactShow2 = _interopRequireDefault(_reactShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popover = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover(props) {
    _classCallCheck(this, Popover);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      isOpen: _this.props.defaultOpen
    };

    _this.togglePopup = function () {
      if (_this.state.isOpen) _this.closePopup();else _this.openPopup();
    };

    _this.openPopup = function () {
      if (_this.state.isOpen) return;
      _this.setState({ isOpen: true }, function () {
        _this.setPosition();
        _this.props.onOpen();
      });
    };

    _this.closePopup = function () {
      if (!_this.state.isOpen) return;
      _this.setState({ isOpen: false }, function () {
        _this.props.onClose();
      });
    };

    _this.onMouseEnter = function () {
      clearTimeout(_this.timeOut);
      var mouseEnterDelay = _this.props.mouseEnterDelay;

      _this.timeOut = setTimeout(function () {
        return _this.openPopup();
      }, mouseEnterDelay);
    };

    _this.onMouseLeave = function () {
      clearTimeout(_this.timeOut);
      var mouseLeaveDelay = _this.props.mouseLeaveDelay;

      _this.timeOut = setTimeout(function () {
        return _this.closePopup();
      }, mouseLeaveDelay);
    };

    _this.setPosition = function () {
      var _this$props = _this.props,
          arrow = _this$props.arrow,
          position = _this$props.position,
          offset = _this$props.offset;

      var helper = _this.HelperEl.getBoundingClientRect();
      var trigger = _this.TriggerEl.getBoundingClientRect();
      var content = _this.ContentEl.getBoundingClientRect();
      var cords = (0, _utils2.default)(trigger, content, position, arrow, offset);

      _this.ContentEl.style.top = cords.top - helper.top + 'px';
      _this.ContentEl.style.left = cords.left - helper.left + 'px';

      if (arrow) {
        _this.ArrowEl.style['transform'] = cords.transform;
        _this.ArrowEl.style['-ms-transform'] = cords.transform;
        _this.ArrowEl.style['-webkit-transform'] = cords.transform;
        _this.ArrowEl.style.top = cords.arrowTop;
        _this.ArrowEl.style.left = cords.arrowLeft;
      }

      if (_this.TriggerEl.style.position == 'static' || _this.TriggerEl.style.position == '') _this.TriggerEl.style.position = 'relative';
    };

    _this.addWarperAction = function () {
      var _this$props2 = _this.props,
          contentStyle = _this$props2.contentStyle,
          className = _this$props2.className,
          menu = _this$props2.menu,
          on = _this$props2.on,
          width = _this$props2.width,
          fullWidth = _this$props2.fullWidth,
          shadow = _this$props2.shadow,
          border = _this$props2.border;

      var popupContentStyle = _popoverCss2.default.popupContent.tooltip;

      if (!shadow) popupContentStyle.boxShadow = '';
      if (!border) popupContentStyle.border = '';

      if (fullWidth) {
        popupContentStyle.width = _this.TriggerEl.getBoundingClientRect().width;

        if (border) {
          popupContentStyle.width = _this.TriggerEl.getBoundingClientRect().width - 2;
        }
      }

      if (width) {
        popupContentStyle.width = width;
      }

      var childrenElementProps = {
        className: 'ri-popup-content ' + className,
        style: Object.assign({}, popupContentStyle, contentStyle),
        ref: _this.setContentRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      };

      if (on.includes('hover')) {
        childrenElementProps.onMouseEnter = _this.onMouseEnter;
        childrenElementProps.onMouseLeave = _this.onMouseLeave;
      }

      return childrenElementProps;
    };

    _this.renderTrigger = function () {
      var triggerProps = {
        key: 'T',
        style: _popoverCss2.default.trigger
      };
      var _this$props3 = _this.props,
          on = _this$props3.on,
          trigger = _this$props3.trigger;

      var onAsArray = Array.isArray(on) ? on : [on];
      triggerProps.ref = _this.setTriggerRef;

      for (var i = 0, len = onAsArray.length; i < len; i++) {
        switch (onAsArray[i]) {
          case 'click':
            triggerProps.onClick = _this.togglePopup;
            break;
          case 'hover':
            triggerProps.onMouseEnter = _this.onMouseEnter;
            triggerProps.onMouseLeave = _this.onMouseLeave;
          case 'focus':
            triggerProps.onFocus = _this.onMouseEnter;
            break;
        }
      }

      if (typeof trigger === 'function') {
        return _react2.default.cloneElement(trigger(_this.state.isOpen), triggerProps);
      }

      return _react2.default.cloneElement(trigger, triggerProps);
    };

    _this.renderContent = function () {
      // if (!this.state.isOpen) return null

      var _this$props4 = _this.props,
          arrow = _this$props4.arrow,
          arrowStyle = _this$props4.arrowStyle,
          animation = _this$props4.animation,
          duration = _this$props4.duration,
          easing = _this$props4.easing;

      var animations = {
        scale: {
          default: { opacity: 0 },
          hide: {
            opacity: 0,
            transform: 'scale(.8) translateY(-30%)',
            pointerEvents: 'none'
          },
          show: { opacity: 1, transform: 'none', pointerEvents: 'auto' }
        },
        fade: {
          default: { opacity: 0 },
          hide: { opacity: 0 },
          show: { opacity: 1 }
        },
        slide: {
          default: { opacity: 0 },
          hide: { opacity: 0, transform: 'translateY(-2em)' },
          show: { opacity: 1, transform: 'translateY(0)' }
        }
      };

      var contentProps = !_this.state.isOpen ? {} : _this.addWarperAction();

      return _react2.default.createElement(
        _Portal2.default,
        null,
        _react2.default.createElement(
          'div',
          _extends({}, contentProps, { key: 'C' }),
          _react2.default.createElement(
            _reactShow2.default,
            {
              show: _this.state.isOpen,
              easing: easing,
              duration: duration,
              unmountOnHide: true,
              style: animations[animation].default,
              styleHide: animations[animation].hide,
              styleShow: animations[animation].show
            },
            _react2.default.createElement(
              'div',
              null,
              arrow && _react2.default.createElement('div', {
                ref: _this.setArrowRef,
                style: Object.assign({}, _popoverCss2.default.popupArrow, arrowStyle)
              }),
              typeof _this.props.children === 'function' ? _this.props.children(_this.closePopup, _this.state.isOpen) : _this.props.children
            )
          )
        )
      );
    };

    _this.setTriggerRef = function (r) {
      return _this.TriggerEl = r;
    };
    _this.setContentRef = function (r) {
      return _this.ContentEl = r;
    };
    _this.setArrowRef = function (r) {
      return _this.ArrowEl = r;
    };
    _this.setHelperRef = function (r) {
      return _this.HelperEl = r;
    };
    _this.timeOut = 0;
    return _this;
  }

  Popover.prototype.componentDidMount = function componentDidMount() {
    if (this.props.defaultOpen) this.setPosition();
  };

  Popover.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeOut);
  };

  Popover.prototype.render = function render() {
    var _props = this.props,
        overlayStyle = _props.overlayStyle,
        closeOnDocumentClick = _props.closeOnDocumentClick;
    var isOpen = this.state.isOpen;

    var ovStyle = _popoverCss2.default.overlay.tooltip;
    return _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        _Portal2.default,
        null,
        _react2.default.createElement('div', {
          key: 'H',
          style: { position: 'absolute', top: '0px', left: '0px' },
          ref: this.setHelperRef
        })
      ),
      isOpen && _react2.default.createElement('div', {
        key: 'O',
        className: 'ri-popover-overlay',
        style: Object.assign({}, ovStyle, overlayStyle),
        onClick: closeOnDocumentClick ? this.closePopup : undefined
      }),
      this.renderContent(),
      this.renderTrigger()
    );
  };

  return Popover;
}(_react2.default.Component);

Popover.propTypes = process.env.NODE_ENV !== "production" ? {
  arrowStyle: _propTypes2.default.object,
  animation: _propTypes2.default.oneOf(['fade', 'scale', 'slide']),
  duration: _propTypes2.default.number,
  contentStyle: _propTypes2.default.object,
  overlayStyle: _propTypes2.default.object,
  className: _propTypes2.default.string,
  closeOnDocumentClick: _propTypes2.default.bool,
  offset: _propTypes2.default.number,
  mouseEnterDelay: _propTypes2.default.number,
  mouseLeaveDelay: _propTypes2.default.number,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element]).isRequired,
  on: _propTypes2.default.oneOfType([_propTypes2.default.oneOf(['hover', 'click', 'focus']), _propTypes2.default.arrayOf(_propTypes2.default.oneOf(['hover', 'click', 'focus']))]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.element, _propTypes2.default.string]).isRequired,
  position: _propTypes2.default.oneOf(['top left', 'top center', 'top right', 'bottom left', 'bottom center', 'bottom right', 'right top', 'right center', 'right bottom', 'left top', 'left center', 'left bottom'])
} : {};

Popover.defaultProps = {
  children: function children() {
    return _react2.default.createElement(
      'span',
      null,
      ' Your Content Here !!'
    );
  },
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  closeOnDocumentClick: true,
  defaultOpen: false,
  on: ['click'],
  contentStyle: {},
  arrowStyle: {},
  overlayStyle: {},
  className: '',
  position: 'bottom center',
  modal: false,
  arrow: true,
  offset: 0,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  animation: 'slide',
  easing: 'easeOutQuint',
  duration: 250,
  shadow: true,
  border: true
};

exports.default = Popover;
module.exports = exports['default'];
'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  transform-origin: 50% 0;\n  animation: ', ' 200ms linear;\n\n  ', '\n  ', '\n'], ['\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  overflow: auto;\n  transform-origin: 50% 0;\n  animation: ', ' 200ms linear;\n\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  background: #ffffff;\n  width: 100%;\n  max-width: 700px;\n  border-radius: 4px;\n  padding: 25px;\n  margin: 10% auto 5%;\n  animation: ', ' 300ms ease-out;\n  position: relative;\n  z-index: 10;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  background: #ffffff;\n  width: 100%;\n  max-width: 700px;\n  border-radius: 4px;\n  padding: 25px;\n  margin: 10% auto 5%;\n  animation: ', ' 300ms ease-out;\n  position: relative;\n  z-index: 10;\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 9;\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 9;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _animations = require('../../utils/animations');

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Backdrop = _styledComponents2.default.aside(_templateObject, _animations.fadeIn, _styledSystem.color, _styledSystem.zIndex);

var Body = _styledComponents2.default.div(_templateObject2, _animations.slideIn, _styledSystem.space, _styledSystem.size, _styledSystem.maxWidth, _styledSystem.color, _styledSystem.borders, _styledSystem.borderRadius, _styledSystem.borderColor, _styledSystem.boxShadow, _styledSystem.fontSize, _styledSystem.fontWeight);

var Closer = _styledComponents2.default.div(_templateObject3);

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.keydown = function (evt) {
      if (_this.props.closeWithEsc && evt.keyCode === 27) {
        _this.closeModal();
      }
    };

    _this.openModal = function () {
      if (document.body) {
        document.body.style.overflow = 'hidden';
      }

      _this.props.onOpen();
      _this.setState({ isOpen: true });
    };

    _this.closeModal = function () {
      if (document.body) {
        document.body.style.overflow = 'auto';
      }

      _this.props.onClose();
      _this.setState({ isOpen: false });
    };

    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
    this.props.closeWithEsc && document.addEventListener('keydown', this.keydown, false);
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    this.props.closeWithEsc && document.removeEventListener('keydown', this.keydown, false);
  };

  Modal.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.state.isOpen) {
      this.setState({ isOpen: nextProps.isOpen });
    }
  };

  Modal.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        closeWithBackdrop = _props.closeWithBackdrop,
        trigger = _props.trigger,
        backdropProps = _props.backdropProps,
        children = _props.children;


    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { onClick: this.openModal },
        trigger
      ),
      this.state.isOpen && _react2.default.createElement(
        Backdrop,
        backdropProps,
        _react2.default.createElement(Closer, { onClick: function onClick() {
            return closeWithBackdrop && _this2.closeModal();
          } }),
        _react2.default.createElement(
          Body,
          this.props,
          typeof children === 'function' ? children(this.closeModal) : children
        )
      )
    );
  };

  return Modal;
}(_react.Component);

Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  isOpen: _propTypes2.default.bool,
  closeWithEsc: _propTypes2.default.bool,
  closeWithBackdrop: _propTypes2.default.bool,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  trigger: _propTypes2.default.object,
  backdropProps: _propTypes2.default.object
} : {};

Modal.defaultProps = {
  isOpen: false,
  closeWithEsc: true,
  closeWithBackdrop: true,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  backdropProps: {
    bg: 'rgba(0, 0, 0, 0.8)',
    zIndex: 11
  }
};

exports.default = Modal;
module.exports = exports['default'];
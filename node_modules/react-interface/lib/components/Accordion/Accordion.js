'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactShow = require('react-show');

var _reactShow2 = _interopRequireDefault(_reactShow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_PureComponent) {
  _inherits(Accordion, _PureComponent);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this, props));

    _this.onClick = function (idx) {
      _this.setState({
        selectedIdx: idx
      });
    };

    _this.state = {
      selectedIdx: props.selectedIdx
    };
    return _this;
  }

  Accordion.prototype.render = function render() {
    var _this2 = this;

    var children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

    return children.map(function (child, idx) {
      var _child$props = child.props,
          trigger = _child$props.trigger,
          childProps = _objectWithoutProperties(_child$props, ['trigger']);

      var styleHide = { opacity: 0, height: 0 };
      var styleShow = { opacity: 1, height: 'auto' };

      return _react2.default.createElement(
        'div',
        {
          key: 'accordion-' + idx,
          style: _this2.props.style,
          className: _this2.props.className
        },
        _react2.default.createElement(
          'span',
          {
            onClick: function onClick() {
              return _this2.onClick(idx);
            }
          },
          trigger
        ),
        _react2.default.createElement(
          _reactShow2.default,
          {
            duration: 200,
            show: idx === _this2.state.selectedIdx,
            styleHide: styleHide,
            styleShow: styleShow
          },
          child
        )
      );
    });
  };

  return Accordion;
}(_react.PureComponent);

exports.default = Accordion;
Accordion.propTypes = process.env.NODE_ENV !== "production" ? {
  selectedIdx: _propTypes2.default.number,
  trigger: _propTypes2.default.object
} : {};
module.exports = exports['default'];
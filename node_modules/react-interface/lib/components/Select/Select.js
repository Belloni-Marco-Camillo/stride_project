'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  color: ', ';\n  ', ' ', ';\n'], ['\n  color: ', ';\n  ', ' ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Popper = require('../Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _Menu = require('../Menu');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Placeholder = _styledComponents2.default.span(_templateObject, function (props) {
  return props.theme.colors['selectPlaceholder'];
}, _styledSystem.color, _styledSystem.hover);

Placeholder.defaultProps = {
  hover: {
    color: 'selectHover',
    bg: 'selectHoverBackground'
  }
};

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    _classCallCheck(this, Select);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Select.prototype.renderPlaceholder = function renderPlaceholder() {
    var placeholderColor = this.props.placeholderColor;

    return _react2.default.createElement(
      Placeholder,
      { color: placeholderColor },
      this.props.placeholder
    );
  };

  Select.prototype.renderSelectedValue = function renderSelectedValue() {
    var _props = this.props,
        value = _props.value,
        options = _props.options;

    return _react2.default.createElement(
      'span',
      null,
      options.find(function (o) {
        return o.value === value;
      }).label
    );
  };

  Select.prototype.renderOptions = function renderOptions(close) {
    var _this2 = this;

    var _props2 = this.props,
        menuProps = _props2.menuProps,
        menuItemProps = _props2.menuItemProps;


    return function (close) {
      return _react2.default.createElement(
        _Menu.Menu,
        menuProps,
        _this2.props.options.map(function (o) {
          return _react2.default.createElement(
            _Menu.MenuItem,
            _extends({
              key: o.value,
              onClick: function onClick() {
                _this2.props.onChange(o.value);
                close();
              }
            }, menuItemProps),
            o.label
          );
        })
      );
    };
  };

  Select.prototype.renderChildren = function renderChildren() {
    var _props3 = this.props,
        value = _props3.value,
        placeholderColor = _props3.placeholderColor,
        iconProps = _props3.iconProps,
        rest = _objectWithoutProperties(_props3, ['value', 'placeholderColor', 'iconProps']);

    return (
      // Cannot assign ref to styled-component, so we must wrap it
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Wrapper2.default,
          _extends({}, rest, { className: 'ri-select', tabIndex: '0' }),
          !value && this.renderPlaceholder(),
          value && this.renderSelectedValue(),
          _react2.default.createElement(_Icon2.default, _extends({ type: 'chevron-down' }, iconProps))
        )
      )
    );
  };

  Select.prototype.render = function render() {
    var _props4 = this.props,
        maxHeight = _props4.maxHeight,
        popoverProps = _props4.popoverProps;

    return _react2.default.createElement(
      _Popper2.default,
      _extends({
        trigger: this.renderChildren(),
        position: 'bottom',
        on: 'click',
        arrow: false,
        fullWidth: true
      }, popoverProps),
      this.renderOptions()
    );
  };

  return Select;
}(_react.Component);

Select.defaultProps = {
  onChange: function onChange() {},
  iconProps: {
    size: 20,
    color: 'selectIcon',
    style: { marginLeft: 'auto', display: 'inherit' }
  },
  popoverProps: {
    maxHeight: '150px',
    mt: '-1px',
    portal: false,
    color: 'select',
    bg: 'selectBackground',
    borderColor: 'selectBorder',
    borderRadius: 0
  },
  menuProps: {
    borderRadius: 0,
    p: 0,
    m: 0,
    bg: 'selectBackground'
  },
  menuItemProps: {
    borderRadius: 0,
    color: 'select',
    hover: {
      color: 'selectItemHover',
      backgroundColor: 'selectItemHoverBackground'
    }
  }
};

exports.default = Select;
module.exports = exports['default'];
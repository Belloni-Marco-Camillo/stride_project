'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  > .checkbox-label {\n    ', '\n\n    color: ', ';\n\n    ', '\n\n    ', '\n  }\n\n  ', '\n  ', '\n  ', '\n'], ['\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n\n  > .checkbox-label {\n    ', '\n\n    color: ', ';\n\n    ', '\n\n    ', '\n  }\n\n  ', '\n  ', '\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n        color: ', ';\n      '], ['\n        color: ', ';\n      ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  box-sizing: border-box;\n  flex-shrink: 0;\n  height: ', ';\n  width: ', ';\n\n  ', '\n\n  background: ', ';\n  border: 1px solid ', ';\n  color: ', ';\n\n  ', '\n\n  &:hover {\n    border-color: ', ';\n    background: ', ';\n  }\n\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  svg,\n  div {\n    display: inherit;\n    height: 100%;\n    width: 100%;\n  }\n'], ['\n  box-sizing: border-box;\n  flex-shrink: 0;\n  height: ', ';\n  width: ', ';\n\n  ', '\n\n  background: ', ';\n  border: 1px solid ', ';\n  color: ', ';\n\n  ', '\n\n  &:hover {\n    border-color: ', ';\n    background: ', ';\n  }\n\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  svg,\n  div {\n    display: inherit;\n    height: 100%;\n    width: 100%;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n      background: ', ';\n      color: ', ';\n      border-color: ', ';\n    '], ['\n      background: ', ';\n      color: ', ';\n      border-color: ', ';\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return !props.palette && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.theme.colors.primary[3];
  });
}, function (props) {
  return props.theme['checkbox.label.color'];
}, function (props) {
  return props.palette && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.theme.colors[props.palette][3];
  });
}, _styledSystem.textColor, _styledSystem.fontSize, _styledSystem.space, _styledSystem.size);

var Box = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.fontSizes[props.theme.sizes[props.size]];
}, function (props) {
  return props.theme.fontSizes[props.theme.sizes[props.size]];
}, function (props) {
  return !props.palette && (0, _styledComponents.css)(_templateObject4, function (props) {
    return props.theme.colors.primary[0];
  }, function (props) {
    return props.theme.colors.primary[3];
  }, function (props) {
    return props.theme.colors.primary[1];
  });
}, function (props) {
  return props.theme['checkbox.background'];
}, function (props) {
  return props.theme['checkbox.border.color'];
}, function (props) {
  return props.theme['checkbox.icon.color'];
}, function (props) {
  return props.palette && (0, _styledComponents.css)(_templateObject4, function (props) {
    return props.theme.colors[props.palette][0];
  }, function (props) {
    return props.theme.colors[props.palette][3];
  }, function (props) {
    return props.theme.colors[props.palette][1];
  });
}, function (props) {
  return props.theme['checkbox.hover.border.color'];
}, function (props) {
  return props.theme['checkbox.hover.background'];
}, _styledSystem.borderRadius, _styledSystem.borderColor, _styledSystem.color, _styledSystem.space, _styledSystem.hover);

var Checkbox = function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    var _temp, _this, _ret;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.onClick = function (e) {
      _this.props.onChange(e, _this.props.value, !_this.props.checked);
    }, _this.onLabelClick = function (e) {
      var _this$props = _this.props,
          onLabelClick = _this$props.onLabelClick,
          onChange = _this$props.onChange,
          value = _this$props.value,
          checked = _this$props.checked;

      // Allow for intercepting of label click if necessary

      if (onLabelClick) {
        onLabelClick(e, value, !checked);
      } else {
        onChange(e, value, !checked);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Checkbox.prototype.render = function render() {
    var _props = this.props,
        id = _props.id,
        label = _props.label,
        name = _props.name,
        value = _props.value,
        disabled = _props.disabled,
        checked = _props.checked,
        onChange = _props.onChange,
        rest = _objectWithoutProperties(_props, ['id', 'label', 'name', 'value', 'disabled', 'checked', 'onChange']);

    return _react2.default.createElement(
      Wrapper,
      _extends({}, rest, { className: 'checkbox-wrapper' }),
      _react2.default.createElement(
        Box,
        _extends({}, this.props, { className: 'checkbox', onClick: this.onClick }),
        checked && _react2.default.createElement(_Icon2.default, { type: 'check' })
      ),
      label && _react2.default.createElement(
        'span',
        { onClick: this.onLabelClick, className: 'checkbox-label' },
        label
      )
    );
  };

  return Checkbox;
}(_react.PureComponent);

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * What type of component is this?
   */
  palette: _propTypes2.default.oneOf(['primary', 'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink', 'info', 'danger', 'warning', 'success', _propTypes2.default.string]),
  /**
   * How big is it?
   */
  size: _propTypes2.default.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl'])
} : {};

Checkbox.defaultProps = {
  size: 'md'
};

exports.default = Checkbox;
module.exports = exports['default'];
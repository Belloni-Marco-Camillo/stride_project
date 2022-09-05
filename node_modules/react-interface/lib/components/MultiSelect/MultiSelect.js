'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(['\n  border-radius: 12px;\n  padding: 3px 6px;\n  background: ', ';\n  color: #fff;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  ', '\n'], ['\n  border-radius: 12px;\n  padding: 3px 6px;\n  background: ', ';\n  color: #fff;\n  margin-top: 2px;\n  margin-bottom: 2px;\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Menu = require('../Menu');

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Popover = require('../Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Popper = require('../Popper');

var _Popper2 = _interopRequireDefault(_Popper);

var _Wrapper = require('./Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _OptionWrapper = require('./OptionWrapper');

var _OptionWrapper2 = _interopRequireDefault(_OptionWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Tag = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.colors.primary[3];
}, _styledSystem.space);

var MultiSelect = function (_PureComponent) {
  _inherits(MultiSelect, _PureComponent);

  function MultiSelect() {
    var _temp, _this, _ret;

    _classCallCheck(this, MultiSelect);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleChange = function (e, option, checked) {
      e.stopPropagation();
      var _this$props = _this.props,
          getValue = _this$props.getValue,
          _this$props$allowEmpt = _this$props.allowEmpty,
          allowEmpty = _this$props$allowEmpt === undefined ? true : _this$props$allowEmpt;

      var value = getValue(option);

      // Add or remove the value
      var combined = checked ? _this.props.selected.concat(option) : _this.props.selected.filter(function (s) {
        return getValue(s) !== value;
      });

      // Don't allow empty selection unless explicitly allowed
      if (!combined.length && allowEmpty) {
        return _this.props.onChange([]);
      }

      if (!combined.length && !allowEmpty) {
        return false;
      }

      // Trigger the onChange prop and ensure unique values
      _this.props.onChange(Array.from(new Set(combined)));
    }, _this.handleOptionClick = function (e, option, close) {
      var _this$props2 = _this.props,
          getValue = _this$props2.getValue,
          appendOnLabelClick = _this$props2.appendOnLabelClick;

      if (!appendOnLabelClick) {
        e.stopPropagation();
        _this.props.onChange([option]);
        close();
      } else {
        var value = getValue(option);
        var isSelected = _this.props.selected.find(function (s) {
          return getValue(s) === value;
        }) !== undefined;
        _this.handleChange(e, option, !isSelected);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MultiSelect.prototype.renderOption = function renderOption(option, label) {
    var renderOption = this.props.renderOption;

    // If option renderer is provided, use that

    if (renderOption) {
      return renderOption(option);
    }

    // Use a simple span to render options
    return _react2.default.createElement(
      'span',
      null,
      label
    );
  };

  MultiSelect.prototype.renderOptions = function renderOptions(close) {
    var _this2 = this;

    var _props = this.props,
        getLabel = _props.getLabel,
        getValue = _props.getValue,
        menuProps = _props.menuProps,
        menuItemProps = _props.menuItemProps,
        checkboxProps = _props.checkboxProps;


    return _react2.default.createElement(
      _OptionWrapper2.default,
      menuProps,
      this.props.options.map(function (o) {
        var label = getLabel(o);
        var value = getValue(o);

        return _react2.default.createElement(
          _Menu.MenuItem,
          _extends({
            key: value,
            onClick: function onClick(e) {
              return _this2.handleOptionClick(e, o, close);
            }
          }, menuItemProps),
          _react2.default.createElement(_Checkbox2.default, _extends({
            className: 'checkbox',
            name: label,
            id: label,
            value: o,
            label: _this2.renderOption(o, label),
            checked: _this2.props.selected.find(function (s) {
              return getValue(s) === value;
            }) !== undefined,
            onChange: _this2.handleChange,
            onLabelClick: function onLabelClick(e) {
              e.stopPropagation();
              _this2.handleOptionClick(e, o, close);
            }
          }, checkboxProps))
        );
      })
    );
  };

  MultiSelect.prototype.renderPlaceholder = function renderPlaceholder() {
    var _this3 = this;

    var _props2 = this.props,
        selected = _props2.selected,
        renderMultiSelected = _props2.renderMultiSelected,
        renderSelected = _props2.renderSelected,
        placeholder = _props2.placeholder,
        getLabel = _props2.getLabel;


    if (selected.length === 0) {
      return _react2.default.createElement(
        'span',
        null,
        placeholder || 'Select Options'
      );
    }

    if (selected.length === 1 && renderSelected) {
      return renderSelected(selected[0]);
    }

    if (selected.length === 1 && !renderSelected) {
      return _react2.default.createElement(
        Tag,
        null,
        getLabel(selected[0])
      );
    }

    if (selected.length > 1 && !renderMultiSelected) {
      return selected.map(function (s) {
        return _react2.default.createElement(
          Tag,
          { mr: 1, key: getLabel(s) },
          _react2.default.createElement(
            'div',
            { key: getLabel(s) },
            _this3.renderOption(s, getLabel(s))
          )
        );
      });
    }

    if (selected.length > 1) {
      return renderMultiSelected(selected);
    }
  };

  MultiSelect.prototype.renderTrigger = function renderTrigger() {
    return _react2.default.createElement(
      _Wrapper2.default,
      _extends({ className: 'ri-multiselect' }, this.props, { tabIndex: '0' }),
      this.renderPlaceholder(),
      _react2.default.createElement(_Icon2.default, {
        type: 'chevron-down',
        size: 20,
        style: { marginLeft: 'auto' }
      })
    );
  };

  MultiSelect.prototype.render = function render() {
    var _this4 = this;

    var popoverProps = this.props.popoverProps;


    return _react2.default.createElement(
      _Popper2.default,
      _extends({
        trigger: this.renderTrigger(),
        animation: 'slide',
        position: 'bottom',
        on: 'click',
        arrow: false,
        fullWidth: true
      }, popoverProps),
      function (close) {
        return _this4.renderOptions(close);
      }
    );
  };

  return MultiSelect;
}(_react.PureComponent);

MultiSelect.defaultProps = {
  selected: [],
  appendOnLabelClick: true,
  popoverProps: {
    maxHeight: '150px',
    mt: '-1px',
    portal: false,
    color: 'multiSelect',
    bg: 'multiSelectBackground',
    borderColor: 'multiSelectPopoverBorder',
    borderRadius: 0
  },
  checkboxProps: {
    mr: 1,
    color: 'multiSelect',
    background: 'multiSelectCheckboxBackground'
  },
  menuProps: {
    borderRadius: 0,
    p: 0,
    m: 0,
    bg: 'multiSelectBackground'
  },
  menuItemProps: {
    borderRadius: 0,
    color: 'multiSelect',
    hover: {
      color: 'multiSelectItemHover',
      backgroundColor: 'multiSelectItemHoverBackground'
    }
  }
};

exports.default = MultiSelect;
module.exports = exports['default'];
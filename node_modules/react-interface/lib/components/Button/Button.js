'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  cursor: pointer;\n  outline: none;\n  transition: all .2s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  /* normalize borders */\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 3px;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:disabled {\n    opacity: .25;\n    background: ', ';\n    color: ', ';\n  }\n'], ['\n  font-smoothing: antialiased;\n  display: inline-block;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  font-family: inherit;\n  cursor: pointer;\n  outline: none;\n  transition: all .2s ease-in-out;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  /* normalize borders */\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 3px;\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  &:disabled {\n    opacity: .25;\n    background: ', ';\n    color: ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      background: ', ';\n      color: ', ';\n      border-color: ', ';\n    '], ['\n      background: ', ';\n      color: ', ';\n      border-color: ', ';\n    ']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n      background: none;\n      color: ', ';\n      border: none;\n    '], ['\n      background: none;\n      color: ', ';\n      border: none;\n    ']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n      font-size: ', ';\n      padding: ', ';\n    '], ['\n      font-size: ', ';\n      padding: ', ';\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return !props.palette && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.theme.colors.buttonBackground;
  }, function (props) {
    return props.theme.colors.button;
  }, function (props) {
    return props.theme.colors.buttonBorder;
  });
}, function (props) {
  return props.palette && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.theme.colors[props.palette][3];
  }, function (props) {
    return props.theme.colors[props.palette][0];
  }, function (props) {
    return props.theme.colors[props.palette][4];
  });
}, function (props) {
  return props.inverse && props.palette && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.theme.colors[props.palette][0];
  }, function (props) {
    return props.theme.colors[props.palette][4];
  }, function (props) {
    return props.theme.colors[props.palette][1];
  });
}, function (props) {
  return props.transparent && (0, _styledComponents.css)(_templateObject3, function (props) {
    return props.palette ? props.theme.colors[props.palette][4] : 'inherit';
  });
}, function (props) {
  return props.size && (0, _styledComponents.css)(_templateObject4, function (props) {
    return props.theme.fontSizes[props.theme.sizes[props.size]];
  }, function (props) {
    return props.theme.buttonPaddings[props.theme.sizes[props.size]];
  });
}, _styledSystem.color, _styledSystem.space, _styledSystem.width, _styledSystem.borders, _styledSystem.borderRadius, _styledSystem.borderColor, _styledSystem.fontWeight, _styledSystem.fontSize, _styledSystem.hover, _styledSystem.boxShadow, function (props) {
  return props.theme.colors.buttonDisabledBackground;
}, function (props) {
  return props.theme.colors.buttonDisabled;
});

Button.propTypes = {
  /**
   * What type of component is this?
   */
  palette: _propTypes2.default.oneOf(['primary', 'gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'indigo', 'purple', 'pink', 'info', 'danger', 'warning', 'success', _propTypes2.default.string]),
  /**
   * How big is it?
   */
  size: _propTypes2.default.oneOf(['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']),
  /**
   * Style overrides
   */
  styles: _propTypes2.default.shape({
    color: _propTypes2.default.string,
    border: _propTypes2.default.string
  }),
  /**
   * Inverse colors
   */
  inverse: _propTypes2.default.bool,
  /**
   * Transparent
   */
  transparent: _propTypes2.default.bool
};

Button.defaultProps = {
  size: 'md',
  inverse: false,
  transparent: false

  /** @component */
};exports.default = Button;
module.exports = exports['default'];
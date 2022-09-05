'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  line-height: 1rem;\n  border-width: 1px;\n  border-style: solid;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: start;\n  line-height: 1rem;\n  border-width: 1px;\n  border-style: solid;\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n\n  ', '\n\n  ', '\n']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n      background: ', ';\n      color: ', ';\n      border-color: ', ';\n    '], ['\n      background: ', ';\n      color: ', ';\n      border-color: ', ';\n    ']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Notification = _styledComponents2.default.div(_templateObject, _styledSystem.borderRadius, _styledSystem.borders, _styledSystem.color, _styledSystem.space, _styledSystem.justifyContent, _styledSystem.width, _styledSystem.fontSize, function (props) {
  return props.palette && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.theme.colors[props.palette][0];
  }, function (props) {
    return props.theme.colors[props.palette][4];
  }, function (props) {
    return props.theme.colors[props.palette][2];
  });
}, function (props) {
  return props.palette && props.solid && (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.theme.colors[props.palette][3];
  }, function (props) {
    return props.theme.colors[props.palette][0];
  }, function (props) {
    return props.theme.colors[props.palette][4];
  });
});

Notification.defaultProps = {
  borderRadius: 4,
  p: 3,
  solid: false,
  bg: 'notificationBackground',
  color: 'notificationColor',
  borderColor: 'notificationBorder'

  /** @component */
};exports.default = Notification;
module.exports = exports['default'];
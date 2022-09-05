'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  font-family: ', ';\n  background: ', ';\n  color: ', ';\n  box-sizing: border-box;\n'], ['\n  font-family: ', ';\n  background: ', ';\n  color: ', ';\n  box-sizing: border-box;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _deepmerge = require('deepmerge');

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _base = require('./themes/base');

var _base2 = _interopRequireDefault(_base);

var _colors = require('./themes/utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

// Check out https://github.com/jxnblk/styled-system/tree/master/system-components
// and https://github.com/pricelinelabs/design-system
var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.fonts.primary;
}, function (props) {
  return props.theme.colors.background;
}, function (props) {
  return props.theme.colors.text || props.theme.colors.gray[8];
});

var Theme = function Theme(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? {} : _ref$theme,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ['theme', 'color']);

  // Merge base theme and theme with palette
  // theme arrays will be overriden
  var merged = (0, _deepmerge2.default)(_base2.default, theme, {
    arrayMerge: function arrayMerge(destination, source) {
      return source;
    }
  });

  if (color) {
    var primaryShades = (0, _colors.getColorShades)(color, 'primary');
    merged.colors.primary = primaryShades;
  }

  return _react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: merged },
    _react2.default.createElement(Wrapper, rest)
  );
};

exports.default = Theme;
module.exports = exports['default'];
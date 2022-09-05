'use strict';

exports.__esModule = true;
exports.createTheme = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * React UI Base Theme
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   */

var _colors = require('./colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('./fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _sizes = require('./sizes');

var _sizes2 = _interopRequireDefault(_sizes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTheme = exports.createTheme = function createTheme(themeColors) {
  return _extends({
    fonts: _fonts2.default
  }, _sizes2.default, {
    colors: _extends({}, _colors2.default, themeColors, {

      /* Button */
      button: _colors2.default.primary[0],
      buttonBorder: _colors2.default.primary[4],
      buttonBackground: _colors2.default.primary[4],

      /* Select */
      select: _colors2.default.gray[7],
      selectHover: _colors2.default.gray[6],
      selectHoverBackground: _colors2.default.gray[1],
      selectBackground: _colors2.default.gray[0],
      selectPlaceholder: _colors2.default.gray[5],
      selectBorder: _colors2.default.gray[5],
      selectFocusBorder: _colors2.default.gray[6],
      selectIcon: _colors2.default.gray[5],
      selectItemHoverBackground: _colors2.default.blue[0],
      selectItemHover: _colors2.default.blue[3],

      /* Notifications */
      notificationBackground: _colors2.default.primary[0],
      notificationColor: _colors2.default.primary[3],
      notificationBorder: _colors2.default.primary[4],

      /* Spinner */
      spinner: _colors2.default.primary[4],

      /* Switch */
      switchOnBackground: _colors2.default.primary[4],
      switchOffBackground: _colors2.default.primary[1],
      switchKnobBackground: _colors2.default.gray[0],

      /* MultiSelect */
      multiSelectBackground: _colors2.default.gray[0],
      multiSelectPlaceholder: _colors2.default.gray[5],
      multiSelectBorder: _colors2.default.gray[5],
      multiSelectIcon: _colors2.default.gray[5],

      /* Accordion */
      accordionLabelColor: _colors2.default.gray[0],
      accordionLabelBackground: _colors2.default.primary[4]
    }),

    /* Checkbox */
    'checkbox.border.color': _colors2.default.primary[2],
    'checkbox.background': _colors2.default.primary[1],
    'checkbox.icon.color': _colors2.default.primary[3],
    'checkbox.label.color': _colors2.default.primary[3],

    /* Popover */
    'popover.border.color': _colors2.default.gray[4],
    'popover.border.style': 'solid',
    'popover.border.width': '1px',

    /* Menus */
    'menu.background': _colors2.default.gray[0],
    'menu.divider.border.color': _colors2.default.background6,
    'menu.item.hover.background': _colors2.default.blue[0],
    'menu.item.hover.color': _colors2.default.blue[3],
    'menu.item.active.background': _colors2.default.primary,
    'menu.item.active.color': _colors2.default.primary9
  });
};

exports.default = createTheme(_colors2.default);
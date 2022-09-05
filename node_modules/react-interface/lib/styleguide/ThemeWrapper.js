'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _themes = require('../../src/themes');

var _themes2 = _interopRequireDefault(_themes);

var _Theme = require('../../src/Theme');

var _Theme2 = _interopRequireDefault(_Theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var themeMap = {
  light: _themes2.default.light,
  dark: _themes2.default.dark
};

var Styleguide = function (_Component) {
  _inherits(Styleguide, _Component);

  function Styleguide(props) {
    _classCallCheck(this, Styleguide);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      theme: 'light'
    };
    return _this;
  }

  Styleguide.prototype.getTheme = function getTheme() {
    return themeMap[this.state.theme];
  };

  Styleguide.prototype.renderThemeSelector = function renderThemeSelector() {
    var _this2 = this;

    var options = Object.keys(themeMap).map(function (key) {
      return _react2.default.createElement(
        Button,
        {
          size: 'sm',
          key: 'theme-' + key,
          onClick: function onClick() {
            return _this2.setState({ theme: key });
          }
        },
        key
      );
    });

    return _react2.default.createElement(
      'ul',
      null,
      options
    );
  };

  Styleguide.prototype.render = function render() {
    return _react2.default.createElement(
      _Theme2.default,
      null,
      this.props.children
    );
  };

  return Styleguide;
}(_react.Component);

exports.default = Styleguide;
module.exports = exports['default'];
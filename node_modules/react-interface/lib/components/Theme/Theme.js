'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _color = require('color');

var _color2 = _interopRequireDefault(_color);

var _styledComponents = require('styled-components');

var _gridStyled = require('grid-styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var groupColorsByName = function groupColorsByName(colors) {
  return Object.keys(colors).filter(function (c) {
    return typeof colors[c] !== 'string';
  }).map(function (c) {
    return _react2.default.createElement(
      _gridStyled.Box,
      { w: 1 / 3, p: 3, key: c },
      colors[c].map(function (p, i) {
        return _react2.default.createElement(
          'div',
          {
            key: p + '-' + i,
            style: {
              background: p,
              padding: 10,
              color: (0, _color2.default)(p).light() ? '#000' : '#FFF'
            }
          },
          c + '[' + i + ']',
          ' (',
          p,
          ')'
        );
      })
    );
  });
};

var Theme = function Theme(props) {
  return _react2.default.createElement(
    _gridStyled.Flex,
    { wrap: 'wrap', borderRadius: 3 },
    groupColorsByName(props.theme.colors)
  );
};

exports.default = (0, _styledComponents.withTheme)(Theme);
module.exports = exports['default'];
'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  ', '\n  ', '\n  ', '\n  ', '\n'], ['\n  ', '\n  ', '\n  ', '\n  ', '\n']);

var _gridStyled = require('grid-styled');

var _styledSystem = require('styled-system');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = _gridStyled.Box.extend(_templateObject, _styledSystem.borders, _styledSystem.borderRadius, _styledSystem.borderColor, _styledSystem.boxShadow);
module.exports = exports['default'];
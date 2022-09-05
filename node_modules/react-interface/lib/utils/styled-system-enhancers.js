'use strict';

exports.__esModule = true;
exports.flex = exports.maxWidth = exports.basis = exports.shrink = exports.grow = undefined;

var _styledSystem = require('styled-system');

var grow = exports.grow = function grow(_ref) {
  var grow = _ref.grow;

  if (grow === undefined) return null;
  var cssAttr = grow;
  if (grow === false) cssAttr = 0;
  if (grow === true) cssAttr = 1;

  return { 'flex-grow': cssAttr };
};

var shrink = exports.shrink = function shrink(_ref2) {
  var shrink = _ref2.shrink;

  if (shrink === undefined) return null;
  var cssAttr = shrink;
  if (shrink === false) cssAttr = 0;
  if (shrink === true) cssAttr = 1;

  return { 'flex-shrink': cssAttr };
};

var basis = exports.basis = function basis(_ref3) {
  var basis = _ref3.basis;

  if (basis === undefined) return null;
  return { 'flex-basis': basis };
};

var maxWidth = exports.maxWidth = function maxWidth(_ref4) {
  var mw = _ref4.mw;

  if (mw === undefined) return null;
  return {
    'max-width': typeof mw === 'string' ? mw : mw + 'px'
  };
};

var flex = exports.flex = function flex(_ref5) {
  var flex = _ref5.flex;

  if (flex === undefined) return null;
  return {
    display: flex ? 'flex' : 'initial'
  };
};
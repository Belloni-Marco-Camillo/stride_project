"use strict";

exports.__esModule = true;
exports.debounce = debounce;
function debounce(func, wait, immediate) {
  var timeout = void 0;
  return function () {
    var context = this;

    for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    var args = rest;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) func.apply(context, args);
  };
}
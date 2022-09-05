'use strict';

exports.__esModule = true;
exports.slideIn = exports.spin = exports.start = exports.progressLinearMovement = exports.fadeOutDown = exports.fadeInDown = exports.fadeOutUp = exports.fadeInUp = exports.fadeOut = exports.scaleIn = exports.fadeIn = exports.animation = undefined;

var _templateObject = _taggedTemplateLiteralLoose(['\n    animation: ', ' ', 's ', ';\n    animation-fill-mode: forwards;\n  '], ['\n    animation: ', ' ', 's ', ';\n    animation-fill-mode: forwards;\n  ']),
    _templateObject2 = _taggedTemplateLiteralLoose(['\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n'], ['\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteralLoose(['\n  0% {\n    opacity: 0;\n    transform: scale(.8) translateY(-30%);\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n    pointer-events: auto;\n  }\n'], ['\n  0% {\n    opacity: 0;\n    transform: scale(.8) translateY(-30%);\n    pointer-events: none;\n  }\n  100% {\n    opacity: 1;\n    transform: none;\n    pointer-events: auto;\n  }\n']),
    _templateObject4 = _taggedTemplateLiteralLoose(['\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n'], ['\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n']),
    _templateObject5 = _taggedTemplateLiteralLoose(['\n  0% {\n    opacity: 0;\n    position: relative;\n    top: 10px;\n  }\n  100% {\n    opacity: 1;\n    position: relative;\n    top: 0;\n  }\n'], ['\n  0% {\n    opacity: 0;\n    position: relative;\n    top: 10px;\n  }\n  100% {\n    opacity: 1;\n    position: relative;\n    top: 0;\n  }\n']),
    _templateObject6 = _taggedTemplateLiteralLoose(['\n  0% {\n    opacity: 1;\n    position: relative;\n    top: 0px;\n  }\n  100% {\n    opacity: 0;\n    position: relative;\n    top: -10px;\n  }\n'], ['\n  0% {\n    opacity: 1;\n    position: relative;\n    top: 0px;\n  }\n  100% {\n    opacity: 0;\n    position: relative;\n    top: -10px;\n  }\n']),
    _templateObject7 = _taggedTemplateLiteralLoose(['\n  0% {\n    opacity: 0;\n    position: relative;\n    bottom: 10px;\n  }\n  100% {\n    opacity: 1;\n    position: relative;\n    bottom: 0;\n  }\n'], ['\n  0% {\n    opacity: 0;\n    position: relative;\n    bottom: 10px;\n  }\n  100% {\n    opacity: 1;\n    position: relative;\n    bottom: 0;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteralLoose(['\n  0% {\n    opacity: 1;\n    position: relative;\n    bottom: 0;\n  }\n  100% {\n    opacity: 0;\n    position: relative;\n    bottom: -10px;\n  }\n'], ['\n  0% {\n    opacity: 1;\n    position: relative;\n    bottom: 0;\n  }\n  100% {\n    opacity: 0;\n    position: relative;\n    bottom: -10px;\n  }\n']),
    _templateObject9 = _taggedTemplateLiteralLoose(['\n  0% {\n    left: -100%;\n  }\n  50% {\n    left: 100%;\n  }\n  100% {\n    left: 100%;\n  }\n'], ['\n  0% {\n    left: -100%;\n  }\n  50% {\n    left: 100%;\n  }\n  100% {\n    left: 100%;\n  }\n']),
    _templateObject10 = _taggedTemplateLiteralLoose(['\n  from {\n    max-height: 0;\n    opacity: 0;\n  }\n  to {\n    max-height: 20px;\n    opacity: 1;\n  }\n'], ['\n  from {\n    max-height: 0;\n    opacity: 0;\n  }\n  to {\n    max-height: 20px;\n    opacity: 1;\n  }\n']),
    _templateObject11 = _taggedTemplateLiteralLoose(['\n  to { transform: translateY(-15.0em); }\n'], ['\n  to { transform: translateY(-15.0em); }\n']),
    _templateObject12 = _taggedTemplateLiteralLoose(['\n  0% {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n'], ['\n  0% {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n']);

var _styledComponents = require('styled-components');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var animation = exports.animation = function animation(name) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var loops = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return (0, _styledComponents.css)(_templateObject, name, duration, loops);
};

var fadeIn = exports.fadeIn = (0, _styledComponents.keyframes)(_templateObject2);

var scaleIn = exports.scaleIn = (0, _styledComponents.keyframes)(_templateObject3);

var fadeOut = exports.fadeOut = (0, _styledComponents.keyframes)(_templateObject4);

var fadeInUp = exports.fadeInUp = (0, _styledComponents.keyframes)(_templateObject5);

var fadeOutUp = exports.fadeOutUp = (0, _styledComponents.keyframes)(_templateObject6);

var fadeInDown = exports.fadeInDown = (0, _styledComponents.keyframes)(_templateObject7);

var fadeOutDown = exports.fadeOutDown = (0, _styledComponents.keyframes)(_templateObject8);

var progressLinearMovement = exports.progressLinearMovement = (0, _styledComponents.keyframes)(_templateObject9);

var start = exports.start = (0, _styledComponents.keyframes)(_templateObject10);

var spin = exports.spin = (0, _styledComponents.keyframes)(_templateObject11);

var slideIn = exports.slideIn = (0, _styledComponents.keyframes)(_templateObject12);
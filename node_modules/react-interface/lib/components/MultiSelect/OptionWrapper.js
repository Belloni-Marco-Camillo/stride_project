'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['\n  > li:hover {\n    .checkbox {\n      background: ', ';\n    }\n  }\n\n  .children {\n    height: 100%;\n  }\n\n  .checkbox-wrapper {\n    width: 100%;\n  }\n\n  .checkbox-label {\n    flex-grow: 1;\n    padding-left: 0;\n  }\n\n  label {\n    width: 100%;\n  }\n'], ['\n  > li:hover {\n    .checkbox {\n      background: ', ';\n    }\n  }\n\n  .children {\n    height: 100%;\n  }\n\n  .checkbox-wrapper {\n    width: 100%;\n  }\n\n  .checkbox-label {\n    flex-grow: 1;\n    padding-left: 0;\n  }\n\n  label {\n    width: 100%;\n  }\n']);

var _Menu = require('../Menu');

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

exports.default = _Menu.Menu.extend(_templateObject, function (props) {
  return props.theme.colors.multiSelectCheckboxHoverBackground;
});
module.exports = exports['default'];
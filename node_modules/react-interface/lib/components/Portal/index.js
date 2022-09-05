'use strict';

exports.__esModule = true;
exports.default = undefined;

var _react = require('react');

var _inDOM = require('dom-helpers/util/inDOM');

var _inDOM2 = _interopRequireDefault(_inDOM);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var portalContainer = void 0;

var Portal = function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    _classCallCheck(this, Portal);

    // This fixes SSR
    var _this = _possibleConstructorReturn(this, _Component.call(this));

    if (!_inDOM2.default) return _possibleConstructorReturn(_this);

    if (!portalContainer) {
      portalContainer = document.createElement('div');
      portalContainer.setAttribute('ri-portal-container', '');
      document.body.appendChild(portalContainer);
    }

    _this.el = document.createElement('div');
    return _this;
  }

  Portal.prototype.componentDidMount = function componentDidMount() {
    portalContainer.appendChild(this.el);
  };

  Portal.prototype.componentWillUnmount = function componentWillUnmount() {
    portalContainer.removeChild(this.el);
  };

  Portal.prototype.render = function render() {
    if (!_inDOM2.default) return null;
    return _reactDom2.default.createPortal(this.props.children, this.el);
  };

  return Portal;
}(_react.Component);

exports.default = Portal;


Portal.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes2.default.node.isRequired

  // import React from 'react'
  // import ReactDOM from 'react-dom'
  // class Portal extends React.Component {
  //     render() {
  //         const { children, target = document.body } = this.props;
  //         return ReactDOM.createPortal(children, target);
  //     }
  // }

  // export default Portal

} : {};
module.exports = exports['default'];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dispatch = exports.setStore = void 0;

var _lodash = _interopRequireDefault(require("lodash.get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var storeKey = '@pubcore/state';
var store = null;

var setStore = function setStore(s) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (params.globalState && typeof window != 'undefined') {
    store = window[storeKey] = s;
  } else if (params.globalState && typeof global != 'undefined') {
    store = global[storeKey] = s;
  } else {
    store = s;
  }
};

exports.setStore = setStore;

var dispatch = function dispatch(a) {
  return store.dispatch(a);
};

exports.dispatch = dispatch;

var _default = function _default() {
  var sliceKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (!store) {
    store = typeof window != 'undefined' && window[storeKey] ? window[storeKey] : global[storeKey];
  }

  if (sliceKey || sliceKey === 0) {
    if (typeof sliceKey !== 'string' && typeof sliceKey !== 'number') {
      throw new TypeError('INVALID_SLICE_KEY');
    }

    return (0, _lodash["default"])(store.getState(), sliceKey + '');
  }

  return store.getState();
};

exports["default"] = _default;
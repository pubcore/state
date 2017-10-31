'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var store = null;
var setStore = exports.setStore = function setStore(s) {
	return store = s;
};
var dispatch = exports.dispatch = function dispatch(a) {
	return store.dispatch(a);
};

exports.default = function () {
	var sliceKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

	if (sliceKey || sliceKey === 0) {
		if (typeof sliceKey !== 'string' && typeof sliceKey !== 'number') {
			throw new TypeError('INVALID_SLICE_KEY');
		}
		return getProperty(store.getState(), sliceKey + '');
	}

	return store.getState();
};

function getProperty(o, path) {
	var arrayOfPath = path.split('.');
	while (arrayOfPath.length && (o = o[arrayOfPath.shift()])) {}
	return o;
}
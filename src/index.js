import get from 'lodash.get'

const storeKey = '@pubcore/state'
var store = null
export const setStore = (s, params = {}) => {
	if(params.globalState && typeof(window) != 'undefined') {
		store = window[storeKey] = s
	} else if(params.globalState && typeof(global) != 'undefined') {
		store = global[storeKey] = s
	} else {
		store = s
	}
}
export const dispatch = a => store.dispatch(a)
export default (sliceKey='') => {
	if(!store) {
		store = (typeof(window) != 'undefined' && window[storeKey]) ? window[storeKey] : global[storeKey]
	}
	if(sliceKey || sliceKey === 0){
		if(typeof sliceKey !== 'string' && typeof sliceKey !== 'number'){
			throw new TypeError('INVALID_SLICE_KEY')
		}
		return get(store.getState(), sliceKey + '')
	}

	return store.getState()
}

import get from 'lodash.get'

var store = null
export const setStore = s => store = s
export const dispatch = a => store.dispatch(a)
export default (sliceKey='') => {
	if(sliceKey || sliceKey === 0){
		if(typeof sliceKey !== 'string' && typeof sliceKey !== 'number'){
			throw new TypeError('INVALID_SLICE_KEY')
		}
		return get(store.getState(), sliceKey + '')
	}

	return store.getState()
}

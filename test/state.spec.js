import { strict as assert } from 'assert'
import S, {setStore} from '../src/index'

setStore({
	getState: () => ({
		uri:{
			query:{
				foo:'bar'
			}
		}
	}),
	dispatch: () => {}
})

describe('pubcore-store', () => {
	it('returns undefined if key does not exists', () =>
		assert.deepStrictEqual(S('does.not.exist'),undefined))
	it('returns object value', () =>
		assert.deepStrictEqual(S('uri.query.foo'),'bar'))
	it('returns object value', () =>
		assert.deepStrictEqual(S('uri.query'),{foo:'bar'}))
})

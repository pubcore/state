import {expect} from 'chai'
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
	it('returns undefined if key does not exists', () => {
		expect(S('does.not.exist')).to.be.undefined
	})
	it('returns value', () => {
		expect(S('uri.query.foo')).to.equal('bar')
	})
})

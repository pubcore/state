[![Build Status](https://travis-ci.org/pubcore/state.svg?branch=master)](https://travis-ci.org/pubcore/state)

### Access property of global state by dot-notation string

#### Install

	npm install --dev pubcore-state

#### How to use example, in context with a redux store

Initialization in main script is required

	import {setStore} from 'pubcore-state'

	//we expect a reduxStore has been created before
	setStore(reduxStore)

If we want to read a property of global State ...

	import S from 'pubcore-state'

	var book = S('room.shelf.b1')

	//returns undefined if a key does not exist
	S('key.does.not.exist') === undefined

Since 1.1.0 it uses lodash.get internal. You can now use same string notation like in lodash.get. Have a look at the [lodash documentation](https://lodash.com/docs/#get).

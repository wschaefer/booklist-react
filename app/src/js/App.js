import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './Reducer';
import ContainerBookList from './ContainerBookList';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.store = createStore(
			reducer,
			applyMiddleware(
		    thunkMiddleware
		  )
		);
	}
  render() {
    return <ContainerBookList store={this.store} />;
  }
}
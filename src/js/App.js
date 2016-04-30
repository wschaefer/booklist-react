import React from 'react';
import ContainerBookList from './ContainerBookList';
import { createStore } from 'redux';
import { reducer } from './Reducer'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.store = createStore(reducer);
	}
  render() {
    return <ContainerBookList store={this.store} />;
  }
}
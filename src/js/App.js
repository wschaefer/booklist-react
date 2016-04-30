import React from 'react';
import BookList from './BookList';
import { createStore } from 'redux';
import { reducer } from './Reducer'

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.store = createStore(reducer);
	}
  render() {
    return <BookList store={this.store} />;
  }
}
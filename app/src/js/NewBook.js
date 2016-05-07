import React from 'react';
import { connect } from 'react-redux'
import { createBook } from './actions'

class NewBook extends React.Component {
	constructor(props) {
		super(props);
		this.createBook = this.createBook.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onAuthorFirstChange = this.onAuthorFirstChange.bind(this);
		this.onAuthorLastChange = this.onAuthorLastChange.bind(this);
		this.state = {
			title: '',
			author_first: '',
			author_last: ''
		}
	}

	onTitleChange(e) {
		this.setState({title: e.target.value})
	}

	onAuthorFirstChange(e) {
		this.setState({author_first: e.target.value})
	}

	onAuthorLastChange(e) {
		this.setState({author_last: e.target.value})
	}

	createBook() {
		let book = {
			id: 2, 
			title: this.state.title, 
			author_first: this.state.author_first,
			author_last: this.state.author_last
		};
		this.props.dispatch(createBook(book))
	}

  render() {
    return (
    	<div>
    		<h2>New Book</h2>

    		<label>Title</label>
    		<input type="text" onChange={this.onTitleChange}></input>

    		<label>Author First Name</label>
    		<input type="text" onChange={this.onAuthorFirstChange}></input>

    		<label>Author Last Name</label>
    		<input type="text" onChange={this.onAuthorLastChange}></input>

        <button onClick={this.createBook}>Add Book</button>
    	</div>
    );
  }
}

NewBook = connect()(NewBook)
export default NewBook
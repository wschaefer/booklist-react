import React from 'react';
import { connect } from 'react-redux'
import { addBook } from './actions'

class NewBook extends React.Component {
	constructor(props) {
		super(props);
		this.addBook = this.addBook.bind(this);
		this.onTitleChange = this.onTitleChange.bind(this);
		this.onAuthorFirstChange = this.onAuthorFirstChange.bind(this);
		this.onAuthorLastChange = this.onAuthorLastChange.bind(this);
		this.state = {
			title: '',
			authorFirst: '',
			authorLast: ''
		}
	}

	onTitleChange(e) {
		this.setState({title: e.target.value})
	}

	onAuthorFirstChange(e) {
		this.setState({authorFirst: e.target.value})
	}

	onAuthorLastChange(e) {
		this.setState({authorLast: e.target.value})
	}

	addBook() {
		let book = {
			id: 2, 
			title: this.state.title, 
			authorFirst: this.state.authorFirst, 
			authorLast: this.state.authorLast
		};
		this.props.dispatch(addBook(book))
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

    		<button onClick={this.addBook}>Add Book</button>
    	</div>
    );
  }
}

NewBook = connect()(NewBook)
export default NewBook
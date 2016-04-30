import React from 'react';
import Book from './Book';
import NewBook from './NewBook';

export default class BookList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: [
				{id: 0, title: "Norwegian Wood", authorLast: "Murakami", authorFirst: "Haruki"},
				{id: 1, title: "French Lieutenant's Woman", authorLast: "Fowles", authorFirst: "John"}
			]
		};
		this.addBook = this.addBook.bind(this);
	}

	addBook(book) {
		let books = this.state.books;
		books.push(book);
		this.setState({books: books});
	}

	render() {
		let bookElements = this.state.books.map((book) => {
			return (<Book key={book.id} book={book} />);
		});

	    return (
	    	<div>
	    		<h1>Books</h1>
	    		<NewBook addBook={this.addBook} />
	    		{bookElements}
	    	</div>
	    );
 	}
}
import React from 'react';
import Book from './Book';
import NewBook from './NewBook';

export default class BookList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let bookElements = this.props.books.map((book) => {
			return (<Book key={book.id} book={book} />);
		});

	    return (
	    	<div>
	    		<h1>Books</h1>
					<NewBook store={this.props.store} />
	    		{bookElements}
	    	</div>
	    );
 	}
}
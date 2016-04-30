import React from 'react';
import Book from './Book';
import NewBook from './NewBook';

export default class BookList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			books: this.props.store.getState()
		};

		this.props.store.subscribe(() => {
			this.setState({
				books: this.props.store.getState()
			});
		});
	}

	render() {
		let bookElements = this.state.books.map((book) => {
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
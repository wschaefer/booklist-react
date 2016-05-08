import React from 'react';
import Book from './Book';
import NewBook from './NewBook';
import { VisibilityFilters } from './VisibilityFilters'

export default class BookList extends React.Component {
	constructor(props) {
		super(props);

		this.showUnread = this.showUnread.bind(this)
		this.showRead = this.showRead.bind(this)
		this.showAll = this.showAll.bind(this)
		this.markAsRead = this.markAsRead.bind(this)
	}

	showUnread() {
		this.props.setVisibilityFilter(VisibilityFilters.SHOW_UNREAD)
	}

	showRead() {
		this.props.setVisibilityFilter(VisibilityFilters.SHOW_READ)
	}

	showAll() {
		this.props.setVisibilityFilter(VisibilityFilters.SHOW_ALL)
	}

	markAsRead(bookId) {
		this.props.markAsRead(bookId)
	}

	componentDidMount() {
	  this.props.fetchBooks()
	}

	render() {
		let bookElements = this.props.books.map((book) => {
			return (<Book key={book.id} book={book} markAsRead={this.markAsRead} />);
		});

	    return (
	    	<div style={{'margin-left': 'auto', 'margin-right': 'auto', 'max-width': '768px'}}>
	    		<h1>Books</h1>
	    		{bookElements}
          <button onClick={this.showUnread}>Show Unread</button>
          <button onClick={this.showRead}>Show Read</button>
          <button onClick={this.showAll}>Show All</button>

					<NewBook store={this.props.store} />
	    	</div>
	    );
 	}
}
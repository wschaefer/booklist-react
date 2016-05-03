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

	componentDidMount() {
	  this.props.fetchBooks()
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
          <button onClick={this.showUnread}>Show Unread</button>
          <button onClick={this.showRead}>Show Read</button>
          <button onClick={this.showAll}>Show All</button>
	    	</div>
	    );
 	}
}
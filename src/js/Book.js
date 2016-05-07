import React from 'react';

export default class Book extends React.Component {
	constructor(props) {
		super(props);

		this.markAsRead = this.markAsRead.bind(this)
	}

	markAsRead() {
		this.props.markAsRead(this.props.book.id)
	}

  render() {
    let button;
    if (!this.props.book.read) {
      button = (<button onClick={this.markAsRead}>Read</button>)
    }
    return (
      <div>
        {this.props.book.author_last}, {this.props.book.author_first}: {this.props.book.title}
        {button}
      </div>
    );
  }
}
import React from 'react';

export default class Book extends React.Component {
  render() {
    return (
    	<div>{this.props.book.authorLast}, {this.props.book.authorFirst}: {this.props.book.title}</div>
    );
  }
}
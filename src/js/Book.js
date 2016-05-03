import React from 'react';

export default class Book extends React.Component {
  render() {
    return (
      <div>{this.props.book.author_last}, {this.props.book.author_first}: {this.props.book.title}</div>
    );
  }
}
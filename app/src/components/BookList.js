import React, { Component } from 'react';
import Book from './Book';
import List from './List';

class BookList extends Component {
  render() {
    const books = Object.keys(this.props.books);
    const bookList = books.map(id => this.props.books[id]);
    return (
      <List className="book-list">
        {bookList.map(book => <Book book={book} key={book.id} />)}
      </List>
    );
  }
}

export default BookList;
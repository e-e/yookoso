import React, { Component } from 'react';
import { BookNotFoundError } from '../errors';

class Controller extends Component {
  getChaptersFromBook(book, books) {
    for (let i = 0; i < books.length; i++) {
      if (books[i].name.toLowerCase() === book.toLowerCase()) return books[i].chapters;
    }
    throw new BookNotFoundError(`Could not find book [${book}]`);
  }
  render() {
    return <div><code>render()</code> method needs to be defined</div>;
  }
}

export default Controller;
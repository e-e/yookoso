import React, { Component } from 'react';
import Chapter from './Chapter';
import { arr } from '../utils';
import List from './List';
import Nav from './Nav';
import Header from "./Header";
import { debug } from '../utils';

class ChapterList extends Component {
  render() {
    debug('ChapterList.props: ', this.props);

    const book = this.props.book;
    const chapters = arr(this.props.chapters).filter(chapter => chapter.book_id === book.id);

    debug('FLATTENED CHAPTERS', chapters);

    return (
      <div>
        <Nav />
        <Header book={book.name} />
        <List className="chapter-list">
          {chapters.map(chapter => <Chapter book={book} chapter={chapter} key={chapter.id} />)}
        </List>
      </div>
    );
  }
}

export default ChapterList;
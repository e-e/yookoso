import React, { Component } from 'react';
import Chapter from './Chapter';
import { arr } from '../utils';
import List from './List';
import Nav from './Nav';

class ChapterList extends Component {
  render() {
    console.log('ChapterList.props: ', this.props);

    const book = this.props.book;
    const chapters = arr(this.props.chapters).filter(chapter => chapter.book_id === book.id);

    console.log('FLATTENED CHAPTERS', chapters);

    return (
      <div>
        <Nav />
        <List className="chapter-list">
          {chapters.map(chapter => <Chapter book={book} chapter={chapter} key={chapter.id} />)}
        </List>
      </div>
    );
  }
}

export default ChapterList;
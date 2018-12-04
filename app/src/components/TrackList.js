import React, { Component } from 'react';
import Track from './Track';
import { arr } from '../utils';
import List from './List';
import Nav from './Nav';

class TrackList extends Component {
  render() {
    console.log('TrackList.props: ', this.props);
    const book = this.props.book;
    const chapter = this.props.chapter;
    const tracks = arr(this.props.tracks).filter(track => {
      return track.book_id === book.id
        && track.chapter_id === chapter.id;
    });

    return (
      <div>
        <Nav>Back</Nav>
        <List className="track-list">
          {tracks.map(track => <Track book={book} chapter={chapter} track={track} key={track.id} />)}
        </List>
      </div>
    );
  }
}

export default TrackList;
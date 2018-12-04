import React, { Component } from 'react';
import { BookNotFoundError, ChapterNotFoundError, TrackNotFoundError } from '../errors';
import { fetchedData } from '../actions';

const endpoint = '/api/tracks';

class BaseController extends Component {
  componentDidMount() {
    if (!this.props.loaded) {
      fetch(endpoint)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }
          return response;
        })
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {
            this.props.dispatch(fetchedData(json));
          }, 2000);
        });
    }

  }
  get book() {
    const books = this.books;
    const bookName = this.props.match.params.book;

    const bookIds = Object.keys(books);
    for (let i = 0; i < bookIds.length; i++) {
      const book = books[bookIds[i]];
      if (book.name.toLowerCase() === bookName.toLowerCase()) {
        return book;
      }
    }

    throw new BookNotFoundError(`Could not find book [${bookName}]`);
  }
  get chapter() {
    const chapters = this.chapters;
    const chapterNumber = this.props.match.params.chapter.replace(/^ch-/, '');

    const chapterIds = Object.keys(chapters);
    for (let i = 0; i < chapterIds.length; i++) {
      const chapter = chapters[chapterIds[i]];
      if (parseInt(chapter.number, 10) === parseInt(chapterNumber, 10) && this.book.id === chapter.book_id) {
        return chapter;
      }
    }

    throw new ChapterNotFoundError(`Could not find chapter [${chapterName}]`);
  }
  get track() {
    const book = this.book;
    const chapter = this.chapter;
    const tracks = this.tracks;
    const trackNumber = this.props.match.params.track;

    const trackIds = Object.keys(tracks);
    for (let i = 0; i < trackIds.length; i++) {
      const track = tracks[trackIds[i]];

      const correctBook = book.id === track.book_id;
      const correctChapter = chapter.id === track.chapter_id;
      const correctTrack = parseInt(track.number, 10) === parseInt(trackNumber, 10);

      if (correctBook && correctChapter && correctTrack) {
        return track;
      }
    }

    throw new TrackNotFoundError(`Could not find track [${trackNumber}]`);
  }
  get books() {
    return this.props.books;
  }
  get chapters() {
    return this.props.chapters;
  }
  get tracks() {
    return this.props.tracks;
  }

  render() {
    return <div><code>render()</code> method needs to be defined</div>;
  }
}

export default BaseController;
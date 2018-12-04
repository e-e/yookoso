import React from 'react';
import BaseController from './BaseController';
import Player from '../components/Player';
import { connect } from "react-redux";
import Loading from '../components/Loading';
import Settings from '../components/Settings';
import { arr } from '../utils';

class PlayerController extends BaseController {
  render() {
    if (!this.props.loaded) {
      return <Loading />
    }

    const book = this.book;
    const chapter = this.chapter;
    const track = this.track;
    const tracks = arr(this.tracks).filter(track => track.book_id === book.id && track.chapter_id === chapter.id);
    const nextTrack = track.number < tracks.length ? track.number + 1 : track.number;
    const previousTrack = track.number > 1 ? track.number - 1 : track.number;

    return (
      <div>
        <Player
          book={book}
          chapter={chapter}
          track={this.track}
          settings={this.props.settings}
          trackCount={tracks.length}
          prev={previousTrack}
          next={nextTrack} />
        <Settings />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    chapters: state.chapters,
    tracks: state.tracks,
    loaded: state.loaded,
    settings: state.settings,
  };
};
export default connect(mapStateToProps)(PlayerController);

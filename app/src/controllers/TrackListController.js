import React from 'react';
import BaseController from './BaseController';
import TrackList from '../components/TrackList';
import { connect } from "react-redux";
import Loading from '../components/Loading';

class TrackListController extends BaseController {
  render() {
    if (!this.props.loaded) {
      return <Loading />;
    }

    return (
        <TrackList book={this.book} chapter={this.chapter} tracks={this.tracks} />
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    chapters: state.chapters,
    tracks: state.tracks,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps)(TrackListController);

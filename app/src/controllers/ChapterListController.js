import React from 'react';
import BaseController from './BaseController';
import ChapterList from '../components/ChapterList';
import { connect } from "react-redux";
import Loading from '../components/Loading';
import { debug } from '../utils';

class ChapterListController extends BaseController {
  render() {
    debug('ChapterListController.props: ', this.props);
    if (!this.props.loaded) {
      return <Loading />
    }

    return (

        <ChapterList chapters={this.chapters} book={this.book} />

    );
  }
}

const mapStateToProps = state => {
  debug('STATE', state);
  return {
    books: state.books,
    chapters: state.chapters,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps)(ChapterListController);

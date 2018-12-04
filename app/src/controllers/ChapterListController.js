import React from 'react';
import BaseController from './BaseController';
import Layout from '../components/Layout';
import ChapterList from '../components/ChapterList';
import { connect } from "react-redux";
import Loading from '../components/Loading';

class ChapterListController extends BaseController {
  render() {
    console.log('ChapterListController.props: ', this.props);
    if (!this.props.loaded) {
      return <Loading />
    }

    return (

        <ChapterList chapters={this.chapters} book={this.book} />

    );
  }
}

const mapStateToProps = state => {
  console.log('STATE', state);
  return {
    books: state.books,
    chapters: state.chapters,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps)(ChapterListController);

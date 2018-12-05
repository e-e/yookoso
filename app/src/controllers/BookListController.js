import React from 'react';
import BaseController from './BaseController';
import BookList from '../components/BookList';
import { connect } from "react-redux";
import Loading from '../components/Loading';
import { debug } from '../utils';

class BookListController extends BaseController {

  render() {
    debug('BookListController.props: ', this.props);
    if (!this.props.loaded) {
      return <Loading />;
    }

    return <BookList books={this.books} />;
  }
}

const mapStateToProps = state => {
  debug('STATE', state);
  return {
    books: state.books,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps)(BookListController);

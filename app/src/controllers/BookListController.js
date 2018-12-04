import React from 'react';
import BaseController from './BaseController';
import Layout from '../components/Layout';
import BookList from '../components/BookList';
import { connect } from "react-redux";
import Loading from '../components/Loading';

class BookListController extends BaseController {

  render() {
    console.log('BookListController.props: ', this.props);
    if (!this.props.loaded) {
      return <Loading />;
    }

    return <BookList books={this.books} />;
  }
}

const mapStateToProps = state => {
  console.log('STATE', state);
  return {
    books: state.books,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps)(BookListController);

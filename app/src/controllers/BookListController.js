import React, { Component } from 'react';
import Layout from '../components/Layout';
import BookSelect from '../components/BookSelect';

class BookSelectController extends Component {
  render() {
    return (
      <Layout>
        <BookSelect />
      </Layout>
    );
  }
}

export default BookSelectController;
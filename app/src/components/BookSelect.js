import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions";
import Book from './Book';

class BookSelect extends Component {
  constructor(props) {
    super(props);
    this.bookSelected = this.bookSelected.bind(this);
  }
  bookSelected(event) {
    this.props.onSelectBook()
  }
  render() {
    return (
      <div className="book-select-wrap">
        <Book onBookSelected={this.props.onBookSelected} book="Textbook" />
        <Book onBookSelected={this.props.onBookSelected} book="Workbook" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  let books = Object.keys(state.tracks);
  return { books };
};

const mapDispatchToProps = dispatch => {
  return {
    onBookSelected: book => {
      dispatch(selectBook(book))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookSelect);
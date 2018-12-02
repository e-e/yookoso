import React from 'react';

function click(book, callback) {
  console.log('clickeD!');
  console.log('book: ', book);
  callback(book);
}

const Book = props => {
  return (
    <div onClick={event => click(props.book, props.onBookSelected)}>
      {props.book}
    </div>
  )
};

export default Book;
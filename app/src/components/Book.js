import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

const Book = props => {
  const href = '/' + props.book.name.toLowerCase();
  console.log('Chapter.href:', href);
  return (
    <Link to={href} className="book-link">
      <ListItem className="book">
        {props.book.name}
      </ListItem>
    </Link>
  )
};

export default Book;
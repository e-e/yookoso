import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import { debug } from '../utils';

const Book = props => {
  const href = '/' + props.book.name.toLowerCase();
  debug('Chapter.href:', href);
  return (
    <Link to={href} className="book-link">
      <ListItem className="book">
        {props.book.name}
      </ListItem>
    </Link>
  )
};

export default Book;
import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';
import { debug } from '../utils';

const Chapter = props => {
  debug('Chapter.props: ', props);
  const href = `/${props.book.name.toLowerCase()}/chapter/${props.chapter.number}`;
  debug('Chapter.href:', href);
  return (
    <Link to={href}>
      <ListItem className="chapter">
        Chapter {props.chapter.number}
      </ListItem>
    </Link>
  )
};

export default Chapter;
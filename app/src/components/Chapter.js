import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

const Chapter = props => {
  console.log('Chapter.props: ', props);
  const href = `/${props.book.name.toLowerCase()}/chapter/${props.chapter.number}`;
  console.log('Chapter.href:', href);
  return (
    <Link to={href}>
      <ListItem className="chapter">
        Chapter {props.chapter.number}
      </ListItem>
    </Link>
  )
};

export default Chapter;
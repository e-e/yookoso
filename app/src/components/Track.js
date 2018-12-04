import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

const Track = props => {
  const href = `/${props.book.name.toLowerCase()}/chapter/${props.chapter.number}/track/${props.track.number}`;
  return (
    <Link to={href}>
      <ListItem className="track">
        <div className="track-title">{props.track.title}</div>
        <div className="track-file">{props.track.file}</div>
      </ListItem>
    </Link>
  )
};

export default Track;
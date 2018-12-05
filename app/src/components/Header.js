import React from 'react';
import { debug } from '../utils';

const Header = props => {
  let bookChapter = props.book;
  if (typeof props.chapter === "number") {
    bookChapter += ` | chapter ${props.chapter}`
  }
  const track = !!props.track
    ? (
      <div className="track">
        { props.track }
      </div>
    ) : null;
  debug('HEADER.PROPS', props);
  return (
    <div className="player-title">
      <div className="book-chapter">{bookChapter}</div>
      {track}
    </div>
  )
};

export default Header;
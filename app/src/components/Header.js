import React from 'react';

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
  console.log('HEADER.PROPS', props);
  return (
    <div className="player-title">
      <div className="book-chapter">{bookChapter}</div>
      {track}
    </div>
  )
};

export default Header;
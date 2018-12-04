import React from 'react';

const TrackDetails = ({book, chapter, track}) => {
  return (
    <div className="track-details">
      <div className="track-detail">
        <div className="track-detail-label">Book</div>
        <div className="value">{book.name}</div>
      </div>
      <div className="track-detail">
        <div className="track-detail-label">Chapter</div>
        <div className="value">{chapter.number}</div>
      </div>
    </div>
  );
};
import React from 'react';

const List = props => {
  let className = ['list', props.className || ''].join(' ').trim();
  return (
    <ul className={className}>
      {props.children}
    </ul>
  );
};

export default List;
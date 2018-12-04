import React from 'react';

const ListItem = props => {
  let className = ['list-item', props.className || ''].join(' ').trim();
  return (
    <li className={className}>
      {props.children}
    </li>
  );
};

export default ListItem;
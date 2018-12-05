import React from 'react';
import { withRouter } from 'react-router-dom';
import { debug } from '../utils';

const Nav = props => {
  debug(props);

  return null;
  return (
    <nav>
      <button className="back-button" onClick={() => props.history.goBack()}>&lsaquo; Back</button>
    </nav>
  );
};

export default withRouter(Nav);
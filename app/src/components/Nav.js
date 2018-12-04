import React from 'react';
import { withRouter } from 'react-router-dom';

const Nav = props => {
  console.dir(props);
  return null;
  return (
    <nav>
      <button className="back-button" onClick={() => props.history.goBack()}>&lsaquo; Back</button>
    </nav>
  );
};

export default withRouter(Nav);
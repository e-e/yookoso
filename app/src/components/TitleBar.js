import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { debug } from '../utils';

const Back = withRouter(props => {
  const { history } = props;
  debug('HISTORY', history);
  return history.location.pathname !== "/"
    ? (
      <button className="back-button top-left" onClick={() => history.goBack()}>
        <span>&lsaquo;</span> Back
      </button>
    ) : null;
});

const TitleBar = props => {
  return (
    <div className="title-bar">
      <div className="back">
        <Back />
      </div>
      <div className="title">
        <Link to="/">ようこそ！</Link>
      </div>
    </div>
  );
};

export default TitleBar;
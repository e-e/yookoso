import React from 'react';
import TitleBar from './TitleBar';

const Layout = (props) => {
  return (
    <div className="app-wrap">
      <TitleBar />
      <div className="content-wrap">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BookSelectController from './controllers/BookSelectController';

class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={BookSelectController} />
      </Router>
    );
  }
}

export default AppRouter;
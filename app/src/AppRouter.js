import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BookListController from './controllers/BookListController';
import ChapterListController from './controllers/ChapterListController';
import TrackListController from './controllers/TrackListController';
import PlayerController from './controllers/PlayerController';
import Layout from "./components/Layout";

class AppRouter extends Component {
  render() {
    return (
        <Router>
          <Layout>
            <Route path="/" exact component={BookListController} />
            <Route path="/:book" exact component={ChapterListController} />
            <Route path="/:book/chapter/:chapter" exact component={TrackListController} />
            <Route path="/:book/chapter/:chapter/track/:track" exact component={PlayerController} />
          </Layout>
        </Router>
    );
  }
}

export default AppRouter;
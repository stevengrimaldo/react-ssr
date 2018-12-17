import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';

import globalStyles from './global';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

class App extends Component {
  render() {
    return (
      <div>
        <Global styles={globalStyles} />
        <Helmet
          htmlAttributes={{
            lang: 'en'
          }}
          title="title test"
        />
        <Switch>
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;

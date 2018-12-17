import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Helmet from 'react-helmet';
import { Global } from '@emotion/core';

import globalStyles from './global';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Global styles={globalStyles} />
        <Helmet
          htmlAttributes={{
            lang: 'en'
          }}
          title="title test"
        />
        <header className="App-header">
          <p>Home</p>
        </header>
        <Switch>
          <Route exact path="/" render={() => <div>Match</div>} />
          <Route render={() => <div>Miss</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;

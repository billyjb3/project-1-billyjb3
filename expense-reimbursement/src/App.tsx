import * as React from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {EntryContainer} from './components/entry-container.component';
import {LoginScreen} from './components/login-screen-component';
import {RegisterScreen} from './components/register-screen-component';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <EntryContainer/>
          <Switch>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route component={LoginScreen}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

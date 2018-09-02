import * as React from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {LoginScreen} from './components/entry-components/login-screen-component';
import {RegisterScreen} from './components/entry-components/register-screen-component';
import {EmployeeHeader} from './components/header-components/employee-header-component';
import {EmployeeHome} from './components/employee-components/employee-home-component';
import {EmployeeTickets} from './components/employee-components/employee-tickets-component';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div>
          <EmployeeHeader/>
          <Switch>
            <Route path="/login" component={LoginScreen}/>
            <Route path="/register" component={RegisterScreen}/>
            <Route path="/employee-tickets" component={EmployeeTickets}/>
            <Route path="/employee-home" component={EmployeeHome}/>
            <Route component={LoginScreen}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

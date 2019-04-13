import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Person from '../../Person/Person';
import Header from '../header/header';
import Landing from '../landing/landing';
import Login from '../login/login';
import PageNotFound from '../page-not-found/page-not-found'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          {/*<Person name="mitul" age="21">Hello</Person>*/}
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/landing" component={Landing}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

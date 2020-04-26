import React, { Component } from 'react';
import HomePage from './pages/homepage.component';
import CareerPage from './pages/careerpage.component';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/career' component={CareerPage} />
      </Switch>
    </div>
    );
  }
}

export default App;

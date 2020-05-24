import React, { Component } from 'react';
import HomePage from './pages/home/homepage.component';
import CareerPage from './pages/career/careerpage.component';
import PlayerPage from './pages/player/playerpage.component';
import TeamPage from './pages/team/teampage.component';

import { Switch, Route } from 'react-router-dom';

import './index.css';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/career' component={CareerPage} />
        <Route exact path='/player/:id' component={PlayerPage} />
        <Route exact path='/team/:id'   component={TeamPage} />
      </Switch>
    </div>
    );
  }
}

export default App;

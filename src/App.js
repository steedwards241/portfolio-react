import React from 'react';
import './Sass/App/App.scss';
import './Sass/App-Media/App-Media.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Components/Home';
import Nav from './Components/Nav';

import Calculator from './Components/Screens/Calculator/Calculator';
import WorkoutTracker from './Components/Screens/WorkoutTracker/WorkoutTracker';
import Standings from './Components/Screens/Standings/Standings';
import CustomButton from './Components/Screens/CustomButton/CustomButton';
import ClickGame from './Components/Screens/ClickGame/ClickGame';
import CV from './Components/Screens/CV/CV';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Router>
        <Nav />
        <Switch>
          <div className="app-content-container">
            <Route path="/" exact component={ Home } />
            <Route path="/calculator" component={ Calculator } />
            <Route path="/workout" component={ WorkoutTracker } />
            <Route path="/standings" component={ Standings } />
            <Route path="/custombutton" component={ CustomButton } />
            <Route path ="/clickgame" component={ ClickGame } />
            <Route path="/cv" component={ CV } />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
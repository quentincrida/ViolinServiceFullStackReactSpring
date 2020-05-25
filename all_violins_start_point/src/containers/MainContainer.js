import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import MusicianContainer from './MusicianContainer';
import TuttiContainer from './TuttiContainer';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/violins" component={MusicianContainer}/>
        <Route path="/tuttis" component={TuttiContainer}/>
      </Switch>
      </Fragment>
      </Router>
    )
}

export default MainContainer;

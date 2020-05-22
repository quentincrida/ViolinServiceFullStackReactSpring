import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import MusicianContainer from './MusicianContainer';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/violins" component={MusicianContainer}/>
      </Switch>
      </Fragment>
      </Router>
    )
}

export default MainContainer;

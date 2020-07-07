import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import MusicianContainer from './MusicianContainer';
import TuttiContainer from './TuttiContainer';
import CompositionContainer from'./CompositionContainer';

const MainContainer = () => {

    return (
      <Router>

      <Fragment>
        <h1>The Musicians Booking App: <span id="blurb">An app for creating Musicians and Compositions</span></h1>
      <NavBar/>
      <Switch>
        <Route path="/musicians" component={MusicianContainer}/>
        <Route path="/tuttis" component={TuttiContainer}/>
        <Route path="/compositions" component={CompositionContainer}/>
      </Switch>
      <footer>&copy; Quentin Crida 2020</footer>
      </Fragment>
      </Router>
    )
}

export default MainContainer;

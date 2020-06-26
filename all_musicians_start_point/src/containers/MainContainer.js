import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import MusicianContainer from './MusicianContainer';
import TuttiContainer from './TuttiContainer';
import CompositionContainer from'./CompositionContainer';
import ConcertContainer from './ConcertContainer';

const MainContainer = () => {

    return (
      <Router>

      <Fragment>
        <h1>The Musicians Booking App
        <p id="blurb">An app for creating concerts and populating them with compositions and musicians</p></h1>
      <NavBar/>
      <Switch>
        <Route path="/musicians" component={MusicianContainer}/>
        <Route path="/tuttis" component={TuttiContainer}/>
        <Route path="/compositions" component={CompositionContainer}/>
        <Route path="/concerts" component={ConcertContainer}/>
      </Switch>
      <footer>&copy; Quentin Crida 2020</footer>
      </Fragment>
      </Router>
    )
}

export default MainContainer;

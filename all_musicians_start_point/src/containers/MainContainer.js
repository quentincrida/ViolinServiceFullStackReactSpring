import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import MusicianContainer from './MusicianContainer';
import TuttiContainer from './TuttiContainer';
import SymphonyContainer from'./SymphonyContainer';

const MainContainer = () => {

    return (
      <Router>
      <Fragment>
      <NavBar/>
      <Switch>
        <Route path="/musicians" component={MusicianContainer}/>
        <Route path="/tuttis" component={TuttiContainer}/>
        <Route path="/symphonies" component={SymphonyContainer}/>
      </Switch>
      <footer>&copy; Quentin Crida 2020</footer>
      </Fragment>
      </Router>
    )
}

export default MainContainer;

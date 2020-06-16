import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ConcertList from '../components/concerts/ConcertList';

class ConcertContainer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
          <Route render={(props) => {
            return <ConcertList />

          }}></Route>
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default ConcertContainer;

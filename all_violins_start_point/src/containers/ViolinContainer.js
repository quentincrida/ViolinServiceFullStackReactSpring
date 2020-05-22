import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ViolinList from '../components/violins/ViolinList';

class ViolinContainer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
    <Router>
      <Fragment>
        <Switch>
        <Route render={(props) => {
          return <ViolinList />
        }}/>
        </Switch>
      </Fragment>
    </Router>
  )
  }
}

export default ViolinContainer;

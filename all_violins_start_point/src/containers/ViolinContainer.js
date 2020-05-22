import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ViolinList from '../components/violins/ViolinList';
import Request from '../helpers/request';

class ViolinContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      violins: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/violins')
    .then((data) => {
      this.setState({violins: data});
    })
  }
  render(){
    return (
    <Router>
      <Fragment>
        <Switch>
        <Route render={(props) => {
          return <ViolinList violins={this.state.violins}/>
        }}/>
        </Switch>
      </Fragment>
    </Router>
  )
  }
}

export default ViolinContainer;

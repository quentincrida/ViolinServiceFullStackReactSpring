import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SymphonyList from '../components/symphonies/SymphonyList';
import Request from'../helpers/request';

class SymphonyContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      symphonies: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/symphonies')
    .then((data) => {
      this.setState({symphonies: data})
    })
  }
  render(){
    return (
      <Fragment>
        <Switch>
          <Route render={(props) => {
            return <SymphonyList symphonies={this.state.symphonies}/>
          }}  />
        </Switch>
      </Fragment>
    )
  }
}
export default SymphonyContainer;

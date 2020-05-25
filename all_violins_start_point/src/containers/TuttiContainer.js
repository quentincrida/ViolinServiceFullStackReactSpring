import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TuttiList from '../components/tuttis/TuttiList';
import Request from '../helpers/request';


class TuttiContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tuttis: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/tuttis')
    .then((data) => {
      this.setState({tuttis: data});
    })
  }
  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
          <Route render={(props) => {
            return <TuttiList tuttis={this.state.tuttis}/>
          }} />
          </Switch>
        </Fragment>
      </Router>

    )
  }

}
export default TuttiContainer;

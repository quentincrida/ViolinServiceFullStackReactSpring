import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MusicianList from '../components/musicians/MusicianList';
import Request from '../helpers/request';

class MusicianContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      musicians: []
    }
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/violins')
    .then((data) => {
      this.setState({musicians: data});
    })
  }
  render(){
    return (
    <Router>
      <Fragment>
        <Switch>
        <Route render={(props) => {
          return <MusicianList musicians={this.state.musicians}/>
        }}/>
        </Switch>
      </Fragment>
    </Router>
  )
  }
}

export default MusicianContainer;

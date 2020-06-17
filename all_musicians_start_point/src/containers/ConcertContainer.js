import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ConcertList from '../components/concerts/ConcertList';
import Request from '../helpers/request';
import ConcertDetail from '../components/concerts/ConcertDetail';

class ConcertContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      concerts: []
    }
    this.findConcertById = this.findConcertById.bind(this);
  }
  componentDidMount(){
    const request = new Request();
    request.get('/api/concerts')
    .then((data) => {
      this.setState({concerts: data});

    })
  }
  findConcertById(id){
    return this.state.concerts.find((concert) => {
      return concert.id === parseInt(id);

    });
  }
  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
          <Route exact path="/concerts/:id" render={(props) => {
            const id = props.match.params.id;
            const concert = this.findConcertById(id);
            return <ConcertDetail concert={concert}/>
          }}/>
          <Route render={(props) => {
            return <ConcertList concerts={this.state.concerts}/>
          }}></Route>

          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default ConcertContainer;

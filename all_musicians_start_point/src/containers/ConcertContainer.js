import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ConcertList from '../components/concerts/ConcertList';
import Request from '../helpers/request';
import ConcertDetail from '../components/concerts/ConcertDetail';
import ConcertForm from '../components/concerts/ConcertForm';

class ConcertContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      concerts: [],
      compositions: [],
      musicians: []

    }
    this.findConcertById = this.findConcertById.bind(this);
  }
  componentDidMount(){
    const request = new Request();

    const concertPromise = request.get('/api/concerts');
    const compositionPromise = request.get('/api/compositions');
    const musicianPromise = request.get('/api/musicians');

    Promise.all([concertPromise, compositionPromise,musicianPromise])
    .then((data) => {

      this.setState(
        {concerts: data[0],
          compositions: data[1],
          musicians: data[2]
        }
      )
    })
  }
  findConcertById(id){
    return this.state.concerts.find((concert) => {
      return concert.id === parseInt(id);
    });
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/concerts/' + id;
    request.delete(url).then(() => {
    window.location = '/concerts';
    })
  }
  handleUpdate(concert){
    const request = new Request();
    request.patch('/api/concerts/' + concert.id, concert).then(() => {
      window.location = '/concerts/' + concert.id
    })
  }

  handlePost(concert){
    const request = new Request();
    request.post('/api/concerts', concert).then(() => {
      window.location = '/concerts';

    })
  }
  render(){

    return (
      <Router>
        <Fragment>
          <Switch>
          <Route exact path="/concerts/new" render={(props) => {
            return <ConcertForm compositions = {this.state.compositions} onCreate={this.handlePost}/>
          }}/>
          <Route exact path="/concerts/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const concert = this.findConcertById(id);
              return  <ConcertForm concert={concert} compositions={this.state.compositions}
            onUpdate={this.handleUpdate}/>
          }}/>
          <Route exact path="/concerts/:id" render={(props) => {
            const id = props.match.params.id;
            const concert = this.findConcertById(id);
            return <ConcertDetail concert={concert} onDelete={this.handleDelete} onUpdate={this.handleUpdate}/>
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

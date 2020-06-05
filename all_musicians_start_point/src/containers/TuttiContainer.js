import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TuttiList from '../components/tuttis/TuttiList';
import Request from '../helpers/request';
import TuttiDetail from '../components/tuttis/TuttiDetail';
import TuttiForm from '../components/tuttis/TuttiForm';


class TuttiContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tuttis: [],
      musicians: []
    }
    this.findTuttiById = this.findTuttiById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    const tuttiPromise = request.get('/api/tuttis');
    const musicianPromise = request.get('/api/musicians');

    Promise.all([tuttiPromise, musicianPromise])
    .then((data) => {
      this.setState({
        tuttis: data[0],
        musicians: data[1]
      })
    })
  }
  findTuttiById(id){
    return this.state.tuttis.find((tutti) => {
      return tutti.id === parseInt(id);
    });
  }
  handleDelete(id){
    const request = new Request();
    const url = '/api/tuttis/' + id;
    request.delete(url).then(() => {
      window.location = '/tuttis';
    })
  }
  handlePost(tutti){
    const request = new Request();
    request.post('/api/tuttis', tutti).then(() => {
      window.location = '/tuttis'
    })
  }

  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
          <Route exact path='/tuttis/new' render={(props) => {
            return <TuttiForm musicians = {this.state.musicians} onCreate={this.handlePost}/>
          }}/>
          <Route exact path='/tuttis/:id' render={(props) => {
            // const id = props.match.params.id;
            const tutti = this.findTuttiById(props.match.params.id);
            return <TuttiDetail tutti={tutti} onDelete={this.handleDelete}/>
          }} />
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

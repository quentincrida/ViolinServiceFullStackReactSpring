import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MusicianList from '../components/musicians/MusicianList';
import MusicianDetail from '../components/musicians/MusicianDetail';
import Request from '../helpers/request';

class MusicianContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      musicians: [],
      tuttis: [],
      symphonies: []
    }
    this.findMusicianById = this.findMusicianById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    const musicianPromise = request.get('/api/musicians');
    const tuttiPromise = request.get('/api/tuttis');
    const symphonyPromise = request.get('/api/symphonies');

    Promise.all([musicianPromise, tuttiPromise, symphonyPromise]).then((data) => {
      this.setState({
        musicians: data[0],
        tuttis: data[1],
        symphonies: data[2]
      })
    })
    }
  findMusicianById(id){
    return this.state.musicians.find((musician) => {
        return musician.id === parseInt(id);
    });
  }
  handleDelete(id){
    const request = new Request();
    const url = '/api/musicians/' + id;
    request.delete(url).then(() => {
    window.location = '/musicians';
  });
}
  render(){
    return (
    <Router>
      <Fragment>
        <Switch>
        <Route exact path="/musicians/:id" render={(props) =>{
          const musician = this.findMusicianById(props.match.params.id);
          return <MusicianDetail musician={musician} onDelete={this.handleDelete}/>
        }}/>
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

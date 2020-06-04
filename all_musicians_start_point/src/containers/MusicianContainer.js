import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MusicianList from '../components/musicians/MusicianList';
import MusicianDetail from '../components/musicians/MusicianDetail';
import Request from '../helpers/request';
import MusicianForm from '../components/musicians/MusicianForm';

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
  handlePost(musician){
    const request = new Request();
    request.post('/api/musicians', musician).then(() => {
      window.location = '/musicians'
    })
  }
  handleUpdate(musician){
    const request = new Request();
    request.patch('/api/musicians/' + musician.id, musician).then(() => {
      window.location = '/musicians/' + musician.id
    })
  }


  render(){
    return (
    <Router>
      <Fragment>
        <Switch>
        <Route exact path="/musicians/new" render={(props) => {
          return <MusicianForm tuttis = {this.state.tuttis} onCreate={this.handlePost}/>
        }}/>
        <Route exact path="/musicians/:id/edit" render={(props) => {
          const id = props.match.params.id;
          const musician = this.findMusicianById(id);
          return <MusicianForm musician={musician}
          tuttis={this.state.tuttis} symphonies={this.state.symphonies} onUpdate={this.handleUpdate}/>
        }}

        />
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

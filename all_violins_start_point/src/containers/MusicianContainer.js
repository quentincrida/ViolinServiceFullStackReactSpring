import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MusicianList from '../components/musicians/MusicianList';
import MusicianDetail from '../components/musicians/MusicianDetail';
import Request from '../helpers/request';

class MusicianContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      musicians: []
    }
    this.findMusicianById = this.findMusicianById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/musicians')
    .then((data) => {
      this.setState({musicians: data});
    })
  }
  findMusicianById(id){
    return this.state.musicians.find((musician) => {
        return musician.id === parseInt(id);
    });
  }
  render(){
    return (
    <Router>
      <Fragment>
        <Switch>
        <Route exact path="/musicians/:id" render={(props) => {
          const id = props.match.params.id;
          const musician = this.findMusicianById(id);
          return <MusicianDetail musician={musician}/>
         }} />
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

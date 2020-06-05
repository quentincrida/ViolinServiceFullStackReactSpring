import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SymphonyList from '../components/symphonies/SymphonyList';
import Request from'../helpers/request';
import SymphonyDetail from '../components/symphonies/SymphonyDetail';
import SymphonyForm from '../components/symphonies/SymphonyForm';

class SymphonyContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      symphonies: [],
      musicians: []
    }
    this.findSymphonyById = this.findSymphonyById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    const symphonyPromise = request.get('/api/symphonies');
    const musicianPromise = request.get('/api/musicians');

    Promise.all([symphonyPromise, musicianPromise])
    .then((data) => {
      this.setState({
        symphonies: data[0],
        musicians: data[1]
      })
    })
  }

  findSymphonyById(id){
    return this.state.symphonies.find((symphony) => {
      return symphony.id === parseInt(id);
    })
  }
  handlePost(symphony){
    const request = new Request();
    request.post('/api/symphonies', symphony).then(() => {
      window.location = '/symphonies'
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/symphonies/' + id;
    request.delete(url).then(() => {
      window.location = '/symphonies';
    })
  }
  render(){
    return (
      <Fragment>
        <Switch>
        <Route exact path='/symphonies/new' render={() =>{
          return <SymphonyForm musicians = {this.state.musicians} onCreate={this.handlePost}/>
        }} />
        <Route exact path='/symphonies/:id' render={(props) => {
          // const id = props.match.params.id;
          const symphony = this.findSymphonyById(props.match.params.id);
          return <SymphonyDetail symphony={symphony} onDelete={this.handleDelete}/>
        }}/>
          <Route render={(props) => {
            return <SymphonyList symphonies={this.state.symphonies}/>
          }}  />
        </Switch>
      </Fragment>
    )
  }
}
export default SymphonyContainer;

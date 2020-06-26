import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CompositionList from '../components/compositions/CompositionList';
import Request from'../helpers/request';
import CompositionDetail from '../components/compositions/CompositionDetail';
import CompositionForm from '../components/compositions/CompositionForm';

class CompositionContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      compositions: [],
      musicians: [],
      concerts:[]

    }
    this.findCompositionById = this.findCompositionById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    const compositionPromise = request.get('/api/compositions');
    const musicianPromise = request.get('/api/musicians');
    const concertPromise = request.get('/api/concerts');


    Promise.all([compositionPromise, musicianPromise, concertPromise])
    .then((data) => {
      this.setState({
        compositions: data[0],
        musicians: data[1],
        concerts: data[2]
      })
    })
  }

  findCompositionById(id){
    return this.state.compositions.find((composition) => {
      return composition.id === parseInt(id);
    })
  }
  handlePost(composition){
    const request = new Request();
    request.post('/api/compositions/', composition).then(() => {
      window.location = '/compositions';
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = '/api/compositions/' + id;
    request.delete(url).then(() => {
      window.location = '/compositions';
    })
  }
  handleUpdate(composition){
    const request = new Request();
    request.patch('/api/compositions/' + composition.id, composition).then(() => {
      window.location = '/compositions/' + composition.id;
    })
  }
  render(){
    return (
      <Fragment>
        <Switch>
        <Route exact path='/compositions/new' render={() =>{
          return <CompositionForm musicians = {this.state.musicians} concerts = {this.state.concerts} onCreate={this.handlePost} />
        }} />
        <Route exact path='/compositions/:id/edit' render={(props) => {
          const id = props.match.params.id;
          const composition = this.findCompositionById(id);
          return <CompositionForm composition={composition} concerts={this.state.concerts}
          onUpdate={this.handleUpdate}/>
        }}/>
        <Route exact path='/compositions/:id' render={(props) => {
          const id = props.match.params.id;
          const composition = this.findCompositionById(id);
          return <CompositionDetail composition={composition} onDelete={this.handleDelete}/>
        }}/>
          <Route render={(props) => {
            return <CompositionList compositions={this.state.compositions}/>
          }}  />
        </Switch>
      </Fragment>
    )
  }
}
export default CompositionContainer;

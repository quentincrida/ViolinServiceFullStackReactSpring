import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SymphonyList from '../components/symphonies/SymphonyList';
import Request from'../helpers/request';
import SymphonyDetail from '../components/symphonies/SymphonyDetail';

class SymphonyContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      symphonies: []
    }
    this.findSymphonyById = this.findSymphonyById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/symphonies')
    .then((data) => {
      this.setState({symphonies: data})
    })
  }
  findSymphonyById(id){
    return this.state.symphonies.find((symphony) => {
      return symphony.id === parseInt(id);

    })
  }
  render(){
    return (
      <Fragment>
        <Switch>
        <Route exact path='/symphonies/:id' render={(props) => {
          const id = props.match.params.id;
          const symphony = this.findSymphonyById(id);
          return <SymphonyDetail symphony={symphony}/>
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

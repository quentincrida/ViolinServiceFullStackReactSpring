import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TuttiList from '../components/tuttis/TuttiList';
import Request from '../helpers/request';
import TuttiDetail from '../components/tuttis/TuttiDetail';


class TuttiContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tuttis: []
    }
    this.findTuttiById = this.findTuttiById.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/tuttis')
    .then((data) => {
      this.setState({tuttis: data});
    })
  }
  findTuttiById(id){
    return this.state.tuttis.find((tutti) => {
      return tutti.id === parseInt(id);
    });
  }
  render(){
    return (
      <Router>
        <Fragment>
          <Switch>
          <Route exact path='/tuttis/:id' render={(props) => {
            const id = props.match.params.id;
            const tutti = this.findTuttiById(id);
            return <TuttiDetail tutti={tutti}/>
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

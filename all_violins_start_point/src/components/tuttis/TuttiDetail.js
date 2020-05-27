import React, {Component} from 'react';
import Tutti from './Tutti';

class TuttiDetail extends Component {
  render(){
    if(!this.props.tutti){
      return "Tuttis are loading..."
    }
    const musicians = this.props.tutti.musicians.map((musician, index) => {
      return <li key={index}>{musician.firstName} {musician.lastName}</li>
    })
    return (
      <div className="component">
      <Tutti tutti = {this.props.tutti}/>
      <p>Musicians:</p>
      <ul>
      {musicians}
      </ul>
      </div>
    )
  }
}
export default TuttiDetail;

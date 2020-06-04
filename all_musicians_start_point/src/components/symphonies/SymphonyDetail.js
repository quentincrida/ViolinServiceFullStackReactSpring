import React, {Component} from 'react';
import Symphony from './Symphony';

class SymphonyDetail extends Component {
  render(){
    if(!this.props.symphony){
      return "Loading details...."
    }
    const musicians = this.props.symphony.musicians.map((musician, index) => {
      return <li key={index}>{musician.firstName} {musician.lastName}</li>
    })
    return (
      <div className="component">
      <Symphony symphony = {this.props.symphony}/>
      <p>Musicians:</p>
      <ul>
      {musicians}
      </ul>
      </div>
    )
  }
}
export default SymphonyDetail;

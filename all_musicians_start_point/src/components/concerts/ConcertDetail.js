import React, {Component} from 'react';
import Concert from "./Concert";

class ConcertDetail extends Component {
  render(){
    if(!this.props.concert){
      return "Searching..."
    }
    const compositions = this.props.concert.compositions.map((composition, index) => {
      return <li key={index}>{composition.composer} {composition.title}</li>
    })
    return (
      <div className="component">
      <Concert concert = {this.props.concert} />
      <p>Programme:</p>
      <ul>
      {compositions}
      </ul>
      </div>
    )
  }
}
export default ConcertDetail;

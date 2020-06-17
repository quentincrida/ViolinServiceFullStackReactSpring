import React, {Component} from 'react';
import Concert from "./Concert";

class ConcertDetail extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    this.props.onDelete(this.props.concert.id);
  }

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
      <button onClick={this.handleDelete} className="delete">Delete {this.props.concert.title}</button>
      </div>

    )
  }
}
export default ConcertDetail;

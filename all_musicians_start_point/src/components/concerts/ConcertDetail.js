import React, {Component} from 'react';
import Concert from "./Concert";
import {Link} from 'react-router-dom';

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

    const editUrl ="/concerts/" + this.props.concert.id + "/edit"

    return (
      <div className="widecomponent">
      <Concert concert = {this.props.concert} />
      <p>Programme:</p>
      <ul>
      {compositions}
      </ul>
      <button onClick={this.handleDelete} className="delete">Delete {this.props.concert.title}</button>
      <Link to= {editUrl}><button type="button">Edit {this.props.concert.title}</button></Link>
      </div>

    )
  }
}
export default ConcertDetail;

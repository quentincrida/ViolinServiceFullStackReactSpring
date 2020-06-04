import React, {Component} from 'react';
import Musician from './Musician';
import {Link} from 'react-router-dom';

class MusicianDetail extends Component {
  constructor(props){
   super(props)
   this.handleDelete = this.handleDelete.bind(this);
 }

 handleDelete(){
   this.props.onDelete(this.props.musician.id)
 }

  render(){
    if(!this.props.musician){
    return "Musicians are loading..."
    }
    const symphonies = this.props.musician.symphonies.map((symphony, index) => {
      return <li key={index}>{symphony.composer}</li>
    })
    const editUrl = "/musicians/" + this.props.musician.id + "/edit"

    return (
      <div className = "component">
      <Musician musician = {this.props.musician}/>
      <p>Symphonies: </p>
      <ul>
      {symphonies}
      </ul>
      <button onClick={this.handleDelete}>Delete {this.props.musician.firstName}</button>
      <Link to={editUrl}><button type="button">Edit {this.props.musician.firstName}</button></Link>
      </div>
    )
  }
}
export default MusicianDetail;

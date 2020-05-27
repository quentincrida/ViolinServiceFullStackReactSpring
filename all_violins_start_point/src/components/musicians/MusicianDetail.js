import React, {Component} from 'react';
import Musician from './Musician';

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
    return "I fart in your general direction"
    }
    const symphonies = this.props.musician.symphonies.map((symphony, index) => {
      return <li key={index}>{symphony.composer}</li>
    })

    return (
      <div className = "component">
      <Musician musician = {this.props.musician}/>
      <p>Symphonies: </p>
      <ul>
      {symphonies}
      </ul>
      <button onClick={this.handleDelete}>Delete {this.props.musician.firstName}</button>
      </div>
    )
  }
}
export default MusicianDetail;

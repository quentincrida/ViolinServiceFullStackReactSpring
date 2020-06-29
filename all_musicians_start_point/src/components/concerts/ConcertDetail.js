import React, {Component} from 'react';
import Concert from "./Concert";
import {Link} from 'react-router-dom';

class ConcertDetail extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.deleteComposition = this.deleteComposition.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDelete(){
    this.props.onDelete(this.props.concert.id);
  }
  deleteComposition(compositionIndex) {
    this.props.concert.compositions.splice(compositionIndex, 1)
    this.props.onUpdate(this.props.concert)
  }
  /* Must get ManyTo Many in DB to make this work

  concertHasComposition(composition){
    return this.props.concert.compositions.some((concertComposition) => {
      return composition.id === concertComposition.id
    })
  }
*/
  handleSubmit(event){
    event.preventDefault();
    const index = parseInt(event.target.compositions.value)
    const composition = this.props.compositions[index];
    this.props.concert.compositions.push(composition)
    this.props.onUpdate(this.props.concert);
  }

  render(){
    if(!this.props.concert){
      return "Searching..."
    }

// Will have to make ManyToMany Relationship in DB to make this work: Compositions/Concerts and Add/Delete
    const compositions = this.props.concert.compositions.map((composition, index) => {
      return <li key={index}>{composition.composer} {composition.title} </li>
    })

    const editUrl ="/concerts/" + this.props.concert.id + "/edit"

  /*
  Make DB Many To ManyToMany

  const compositionOptions = this.props.compositions.map((composition, index) => {
      if(!this.concertHasComposition(composition)) {
        return (
          <option key={index} value={index}>{composition.title}, {composition.composer}</option>
        )
      } else {
        return null
      }
    })
    */

    return (
      <div className="widecomponent">
      <Concert concert = {this.props.concert} />
      <p>Programme:</p>
      <ul>
      {compositions}
      </ul>
      <button onClick={this.handleDelete} className="delete">Delete {this.props.concert.title}**</button>
      <p id="deleteNote">** Remove all Compositions before attempting to Delete a Concert</p>

      <Link to= {editUrl}><button type="button">Edit {this.props.concert.title}</button></Link>
      </div>

    )
  }
}
export default ConcertDetail;

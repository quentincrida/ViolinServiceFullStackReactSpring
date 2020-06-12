import React, {Component} from 'react';
import Musician from './Musician';
import {Link} from 'react-router-dom';

class MusicianDetail extends Component {
  constructor(props){
   super(props)
   this.handleDelete = this.handleDelete.bind(this);
   this.deleteComposition = this.deleteComposition.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }


 handleDelete(){
   this.props.onDelete(this.props.musician.id)
 }

 deleteComposition(compositionIndex){
   this.props.musician.compositions.splice(compositionIndex, 1)
   this.props.onUpdate(this.props.musician)
 }
 musicianHasComposition(composition){
   return this.props.musician.compositions.some((musicianComposition) => {
     return composition.id === musicianComposition.id
   })
 }
 handleSubmit(event){
   event.preventDefault();
   const index = parseInt(event.target.compositions.value)
   const composition = this.props.compositions[index]
   this.props.musician.compositions.push(composition)
   this.props.onUpdate(this.props.musician);
 }

  render(){
    if(!this.props.musician){
    return "Musicians are loading..."
    }

    const compositions = this.props.musician.compositions.map((composition, index) => {
      return <li key={index}>{composition.composer}: {composition.title}<button onClick={() => this.deleteComposition(index)}
      >Delete</button>
      </li>
    })

    const editUrl = "/musicians/" + this.props.musician.id + "/edit"

    const compositionOptions = this.props.compositions.map((composition, index) => {
      if(!this.musicianHasComposition(composition)){
        return (
          <option key={index} value={index}>{composition.composer} {composition.title}</option>
        )
      } else {
        return null
      }
    })

    return (
      <div className = "widecomponent">
      <Musician musician = {this.props.musician}/>
      <p>Compositions: </p>
      <ul>
      {compositions}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <select name="compositions">{compositionOptions}
        </select>
        <input type="submit" value="Add Composition"/>
      </form>
      <button onClick={this.handleDelete} className="delete">Delete {this.props.musician.firstName}</button>
      <Link to={editUrl}><button type="button" className="edit">Edit {this.props.musician.firstName}</button></Link>
      </div>
    )
  }
}
export default MusicianDetail;

import React, {Component} from 'react';
import Musician from './Musician';
import {Link} from 'react-router-dom';

class MusicianDetail extends Component {
  constructor(props){
   super(props)
   this.handleDelete = this.handleDelete.bind(this);
   this.deleteSymphony = this.deleteSymphony.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }


 handleDelete(){
   this.props.onDelete(this.props.musician.id)
 }

 deleteSymphony(symphonyIndex){
   this.props.musician.symphonies.splice(symphonyIndex, 1)
   this.props.onUpdate(this.props.musician)
 }
 musicianHasSymphony(symphony){
   return this.props.musician.symphonies.some((musicianSymphony) => {
     return symphony.id === musicianSymphony.id
   })
 }
 handleSubmit(event){
   event.preventDefault();
   const index = parseInt(event.target.symphonies.value)
   const symphony = this.props.symphonies[index]
   this.props.musician.symphonies.push(symphony)
   this.props.onUpdate(this.props.musician);
 }

  render(){
    if(!this.props.musician){
    return "Musicians are loading..."
    }
    const symphonies = this.props.musician.symphonies.map((symphony, index) => {
      return <li key={index}>{symphony.composer} {symphony.number}<button onClick={() => this.deleteSymphony(index)}
      >Delete</button>
      </li>
    })
    const editUrl = "/musicians/" + this.props.musician.id + "/edit"
    const symphonyOptions = this.props.symphonies.map((symphony, index) => {
      if(!this.musicianHasSymphony(symphony)){
        return (
          <option key={index} value={index}>{symphony.composer} {symphony.number}</option>
        )
      } else {
        return null
      }
    })

    return (
      <div className = "component">
      <Musician musician = {this.props.musician}/>
      <p>Symphonies: </p>
      <ul>
      {symphonies}
      </ul>
      <form onSubmit={this.handleSubmit}>
        <select name="symphonies">{symphonyOptions}
        </select>
        <input type="submit" value="Add Symphony"/>
      </form>
      <button onClick={this.handleDelete} className="delete">Delete {this.props.musician.firstName}</button>
      <Link to={editUrl}><button type="button" className="edit">Edit {this.props.musician.firstName}</button></Link>
      </div>
    )
  }
}
export default MusicianDetail;

import React, {Component} from 'react';
import Composition from './Composition';
import {Link} from 'react-router-dom';

class CompositionDetail extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    this.props.onDelete(this.props.composition.id)
  }
  render(){
    if(!this.props.composition){
      return "Loading details...."
    }
    const musicians = this.props.composition.musicians.map((musician, index) => {
      return <li key={index}>{musician.firstName} {musician.lastName}</li>
    })
    const editUrl = "/compositions/" + this.props.composition.id + "/edit"

    return (
      <div className="component">
      <Composition composition = {this.props.composition}/>
      <p>Musicians:</p>
      <ul>
      {musicians}
      </ul>
      <button onClick={this.handleDelete} className="delete">Delete {this.props.composition.composer} {this.props.composition.title}</button>
      <Link to={editUrl}><button type="button" className="edit">Edit {this.props.composition.composer} {this.props.composition.title}</button></Link>
      </div>
    )
  }
}
export default CompositionDetail;

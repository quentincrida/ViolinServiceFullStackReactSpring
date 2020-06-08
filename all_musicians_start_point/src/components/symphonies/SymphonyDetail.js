import React, {Component} from 'react';
import Symphony from './Symphony';
import {Link} from 'react-router-dom';

class SymphonyDetail extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    this.props.onDelete(this.props.symphony.id)
  }
  render(){
    if(!this.props.symphony){
      return "Loading details...."
    }
    const musicians = this.props.symphony.musicians.map((musician, index) => {
      return <li key={index}>{musician.firstName} {musician.lastName}</li>
    })
    const editUrl = "/symphonies/" + this.props.symphony.id + "/edit"

    return (
      <div className="component">
      <Symphony symphony = {this.props.symphony}/>
      <p>Musicians:</p>
      <ul>
      {musicians}
      </ul>
      <button onClick={this.handleDelete} className="delete">Delete {this.props.symphony.composer} {this.props.symphony.number}</button>
      <Link to={editUrl}><button type="button" className="edit">Edit {this.props.symphony.composer} {this.props.symphony.number}</button></Link>
      </div>
    )
  }
}
export default SymphonyDetail;

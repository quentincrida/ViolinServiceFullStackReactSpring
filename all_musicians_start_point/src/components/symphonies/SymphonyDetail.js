import React, {Component} from 'react';
import Symphony from './Symphony';

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
    return (
      <div className="component">
      <Symphony symphony = {this.props.symphony}/>
      <p>Musicians:</p>
      <ul>
      {musicians}
      </ul>
      <button onClick={this.handleDelete}>Delete {this.props.symphony.composer} {this.props.symphony.number}</button>
      </div>
    )
  }
}
export default SymphonyDetail;

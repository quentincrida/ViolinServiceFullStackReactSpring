import React, {Component} from 'react';
import Tutti from './Tutti';

class TuttiDetail extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    this.props.onDelete(this.props.tutti.id)
  }
  render(){
    if(!this.props.tutti){
      return "Tuttis are loading..."
    }
    const musicians = this.props.tutti.musicians.map((musician, index) => {
      return <li key={index}>{musician.firstName} {musician.lastName}</li>
    })
    return (
      <div className="component">
      <Tutti tutti = {this.props.tutti}/>
      <p>Musicians:</p>
      <ul>
      {musicians}
      </ul>
      <button onClick={this.handleDelete}>Delete {this.props.tutti.name}**</button>
      <p>** Remove all musicians before attempting to Delete a Section</p>
      </div>
    )
  }
}
export default TuttiDetail;

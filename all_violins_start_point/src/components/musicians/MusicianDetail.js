import React, {Component} from 'react';
import Musician from './Musician';

class MusicianDetail extends Component{
  render(){
    if(!this.props.musician === 0){
      return "Loading...."
    }
    const symphonies = this.props.musician.symphonies.map((symphony, index) => {
      return <li key={index}>{symphony.composer}</li>
    })
    return (
      <div className="component">
      <Musician musician ={this.props.musician} />
      <p>Symphonies:</p>
      <ul>{symphonies}</ul>
      </div>
    )
  }
}

export default MusicianDetail;

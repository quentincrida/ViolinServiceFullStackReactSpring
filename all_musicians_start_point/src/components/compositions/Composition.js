import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom';

const Composition = (props) => {
  if(!props.composition){
    return "Loading..."
  }
const url ="/compositions/" + props.composition.id;
  return (
    <Fragment>
        <Link to ={url} className="name">
          {props.composition.composer}
        </Link>
      <p>Title: {props.composition.title}</p>
      <p>Key: {props.composition.key}</p>
      <p>Opus: {props.composition.opus}</p>
      <p>Concerts: {props.composition.concert.title}</p>
    </Fragment>
  )
}

export default Composition;

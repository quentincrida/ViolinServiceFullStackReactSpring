import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom';

const Symphony = (props) => {
  if(!props.symphony){
    return "Loading..."
  }
const url ="/symphonies/" + props.symphony.id;
  return (
    <Fragment>
        <Link to ={url} className="name">
          {props.symphony.composer}
        </Link>
      <p>Opus: {props.symphony.opus}</p>
    </Fragment>
  )
}

export default Symphony;

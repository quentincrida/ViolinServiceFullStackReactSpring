import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Musician = (props) => {
  if (!props.musician){
    return "loading..."
  }

  const url = "/musicians/" + props.musician.id;

  return (
    <Fragment>
    <Link to = {url} className="name">
     {props.musician.lastName}, {props.musician.firstName}
    </Link>
    <p>Age: {props.musician.age}</p>
    <p>Instrument: {props.musician.instrument}</p>
    <p>Position: {props.musician.position}</p>
    <p>Section: {props.musician.tutti.name}</p>
    </Fragment>
  )
}

export default Musician;

import React, {Fragment} from 'react';

const Musician = (props) => {
  if (!props.musician){
    return "loading..."
  }

  return (
    <Fragment>
    <p>{props.musician.firstName} {props.musician.lastName}</p>
    <p>Age: {props.musician.age}</p>
    <p>Section: {props.musician.tutti}</p>
    </Fragment>
  )
}

export default Musician;

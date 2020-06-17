import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Concert = (props) => {
  if(!props.concert){
    return "Loading..."
  }
  const url = "/concerts/" + props.concert.id;
    return (
      <Fragment>
      <Link to = {url} className="name">
      {props.concert.title}</Link>
      <p>Venue: {props.concert.venue}</p>
      <p>Date and Time: {props.concert.details}</p>
      </Fragment>
    )
}

export default Concert;

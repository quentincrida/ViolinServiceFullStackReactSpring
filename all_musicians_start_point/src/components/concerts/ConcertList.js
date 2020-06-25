import React from 'react';
import Concert from './Concert.js';

const ConcertList = (props) => {
  if(props.concerts.length === 0){
    return (
      <p>NO LISTED EVENTS</p>
    )
  }

  const sortedConcerts = props.concerts.sort(function(a, b){
   var detailsA=a.details, detailsB=b.details;
   if (detailsA < detailsB) //sort string ascending
    return -1;
   if (detailsA > detailsB)
    return 1;
   return 0; //default return value (no sorting)
  });

  const concerts = props.concerts.map((concert, index) => {

    return (
      <li key={index} className="component-item">
      <div className="component">
      <Concert concert={concert} />
      </div>
      </li>
    )
  })

  return (
    <ul className="component-list">
    {concerts}
    </ul>
  )

}

export default ConcertList;

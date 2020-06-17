import React from 'react';
import Concert from './Concert.js';

const ConcertList = (props) => {
  if(props.concerts.length === 0){
    return (
      <p>Finding concerts...</p>
    )
  }
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

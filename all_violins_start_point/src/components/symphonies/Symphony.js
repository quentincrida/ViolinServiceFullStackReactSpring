import React  from 'react';

const Symphony = (props) => {

  return (
    <div className="component">
        <p className="name">
          {props.symphony.composer}
        </p>
      <p>Opus: {props.symphony.opus}</p>
    </div>
  )
}

export default Symphony;

import React, {Fragment}  from 'react';

const Symphony = (props) => {
  if(!props.symphony){
    return "Loading..."
  }

  return (
    <Fragment>
        <p>
          {props.symphony.composer}
        </p>
      <p>Opus: {props.symphony.opus}</p>
    </Fragment>
  )
}

export default Symphony;

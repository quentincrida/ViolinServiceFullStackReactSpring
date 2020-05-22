import React from 'react';
import Violin from './Violin.js';


const ViolinList = (props) => {
	if(props.violins.length === 0){
		return (<p>Tuning violins...</p>)
	}

	return (
		<div>Im a list of violins!</div>

	)
}
 export default ViolinList;

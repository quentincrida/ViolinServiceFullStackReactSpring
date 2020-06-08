import React from 'react';
import Musician from './Musician.js';


const MusicianList = (props) => {
	if(props.musicians.length === 0){
		return (<p>Tuning musicians...</p>)
	}


const musicians = props.musicians.map((musician, index) => {
	return (
		<li key={index} className="component-item">
		<div className="component">
		<Musician musician={musician} />
		</div>
		</li>
	)
})

	return (
		<ul className="component-list">{musicians}</ul>

	)
}
 export default MusicianList;

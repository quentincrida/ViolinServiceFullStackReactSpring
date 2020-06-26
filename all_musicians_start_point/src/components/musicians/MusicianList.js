import React, {Fragment} from 'react';
import Musician from './Musician.js';


const MusicianList = (props) => {
	if(props.musicians.length === 0){
		return (<p>Tuning musicians...</p>)
	}

	const sortedMusicians = props.musicians.sort(function(a, b){
	 var lastNameA=a.lastName.toLowerCase(), lastNameB=b.lastName.toLowerCase();
	 if (lastNameA < lastNameB) //sort string ascending
	  return -1;
	 if (lastNameA > lastNameB)
	  return 1;
	 return 0; //default return value (no sorting)
	});



const musicians = props.musicians.map((musician, index) => {

	return (
		<li key={index} className="component-item" >
		<div className="component">
		<Musician musician={musician} />
		</div>
		</li>
	)
})



	return (
		<Fragment>
		<h3>Musicians Listed Alphabetically</h3>
		<ul className="component-list">{musicians}</ul>
</Fragment>
	)
}
 export default MusicianList;

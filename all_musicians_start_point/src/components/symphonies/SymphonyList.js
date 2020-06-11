import React from 'react';
import Symphony from './Symphony.js';


const SymphonyList = (props) => {
	if(props.symphonies.length === 0) {
		return (<p>Waiting on symphonies....</p>)
	}

	const sortedSymphonies = props.symphonies.sort(function(a, b){
		var composerA=a.composer.toLowerCase(), composerB=b.composer.toLowerCase();
		if (composerA < composerB) //sort string ascending
		 return -1;
		if (composerA > composerB)
		 return 1;
		return 0; //default return value (no sorting)
	 });
	


	const symphonies = props.symphonies.map((symphony, index) => {

			return (
				<li key={index} className="component-item">
			<div className="component">
				<Symphony symphony={symphony} />
				</div>
			</li>
		)
		})

	return (
		<ul className="component-list">
			{symphonies}
		</ul>

	)
}
 export default SymphonyList;

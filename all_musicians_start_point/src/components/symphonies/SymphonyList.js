import React from 'react';
import Symphony from './Symphony.js';


const SymphonyList = (props) => {
	if(props.symphonies.length === 0) {
		return (<p>Waiting on symphonies....</p>)
	}
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

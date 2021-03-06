import React from 'react';
import Tutti from './Tutti.js';


const TuttiList = (props) => {
	if(props.tuttis.length === 0){
		return (<p>Finding tuttis...</p>)
	}

	const tuttis = props.tuttis.map((tutti, index) => {
			return (
				<li key={index} className="component-item">
				<div className="component">
				<Tutti tutti={tutti} />
				</div>
				</li>
		)
		})

	return (
		<ul className="component-list">
			{tuttis}
		</ul>

	)
}
 export default TuttiList;

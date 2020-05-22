import React from 'react';
import Tutti from './Tutti.js';


const TuttiList = (props) => {
	const tuttis = props.tuttis.map((tutti) => {
			return (<li key={tutti.id} className="component-item">
				<Tutti tutti={tutti} />
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

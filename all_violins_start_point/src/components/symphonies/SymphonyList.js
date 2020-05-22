import React from 'react';
import Symphony from './Symphony.js';


const SymphonyList = (props) => {
	const symphonies = props.symphonies.map((symphony) => {
			return (<li key={symphony.id} className="component-item">
				<Symphony symphony={symphony} />
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

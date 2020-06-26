import React, {Fragment} from 'react';
import Composition from './Composition.js';


const CompositionList = (props) => {
	if(props.compositions.length === 0) {
		return (<p className="subHeading">Waiting on compositions....</p>)
	}

	const sortedCompositions = props.compositions.sort(function(a, b){
		var composerA=a.composer.toLowerCase(), composerB=b.composer.toLowerCase();
		if (composerA < composerB) //sort string ascending
		 return -1;
		if (composerA > composerB)
		 return 1;
		return 0; //default return value (no sorting)
	 });



	const compositions = props.compositions.map((composition, index) => {

			return (
				<li key={index} className="component-item">
			<div className="component">
				<Composition composition={composition} />
				</div>
			</li>
		)
		})

	return (
		<Fragment>
		<h3>Composition List Ordered by Composer Name</h3>
		<ul className="component-list">
			{compositions}
		</ul>
		</Fragment>

	)
}
 export default CompositionList;

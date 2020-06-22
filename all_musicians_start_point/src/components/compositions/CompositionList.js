import React from 'react';
import Composition from './Composition.js';


const CompositionList = (props) => {
	if(props.compositions.length === 0) {
		return (<p>Waiting on compositions....</p>)
	}

	const sortedCompositions = props.compositions.sort(function(a, b){
		var titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase();
		if (titleA < titleB) //sort string ascending
		 return -1;
		if (titleA > titleB)
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
		<ul className="component-list">
			{compositions}
		</ul>

	)
}
 export default CompositionList;

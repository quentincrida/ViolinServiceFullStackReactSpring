import React, {Fragment}  from 'react';

const Tutti = (props) => {
	if(!props.tutti){
		return "Tutti..ing"
	}
		return (
			<div className="component">
					<p className="name">
						{props.tutti.name}
					</p>
			</div>
		)
	}

export default Tutti;

import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom';

const Tutti = (props) => {
	if(!props.tutti){
		return "Tutti..ing"
	}
	const url = "/tuttis/" + props.tutti.id;
		return (
			<Fragment>
			<Link to={url} className="name">
						{props.tutti.name} 
			</Link>
			</Fragment>
		)
	}

export default Tutti;

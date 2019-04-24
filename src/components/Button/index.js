import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
	let fontIcon = props.icon ? [<FontAwesomeIcon key="icon" icon={props.icon} />] : null;

	return (
	<button className={props.className} type={props.type} id={props.id} onClick={props.onClick} onSubmit={props.onSubmit}>
		{fontIcon}
		{props.children}	
	</button>
)}

export default Button
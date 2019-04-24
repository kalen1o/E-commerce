import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import {productDataBase} from '../constants'

const Li = (props) => {
	let nameLi = props.info[0].toUpperCase() + props.info.slice(1)
	return (
	<li><Link to={`/shop/${props.info}`}>{nameLi}</Link></li>
)}

const Menu = () => {
	let elemLi = []
	for (let key in productDataBase) {
		elemLi.push(<Li info={key} key={key}/>);
	}
	return (
		<ul className="ul">
			{elemLi}
		</ul>
	)
}

export default Menu
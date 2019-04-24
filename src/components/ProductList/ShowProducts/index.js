import React from 'react';
import {designImages} from '../../../images';
import {productDataBase} from '../../constants';
import Button from '../../Button';
import './style.css';

const ShowProducts = props => {
	let category = props.category.replace(/%20/g, " ")
	let items = [];

	designImages[category].forEach((item, i) => {
		let buyButton =  [<Button key={i} id={item.id} onClick={props.onClick} className="buy-btn">BUY</Button>];
		let style = {
			backgroundImage: `url(${item.img})`,
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'bottom'
		}
		items.push(
			<div id={productDataBase[category][i].name} key={i} className="design-img" style={style}>
				<div className="info-wrapper">
					<h2 className="h2">{productDataBase[category][i].name}</h2>
					<p className="description">{productDataBase[category][i].description}</p>
					{buyButton}
				</div>
			</div>)
	})
	return (
		<>
			{items}
		</>
	)
}

export default ShowProducts
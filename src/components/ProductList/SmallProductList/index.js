import React from 'react';
import {productDataBase} from '../../constants';
import {productImages} from '../../../images';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './style.css';

const SmallProductList = props => {
	let category = props.category.replace(/%20/g, " ")
	let products = [];
	let style = {display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100px"};
	for (let i = 0; i < productDataBase[category].length; i++) {
		products.push(
			<AnchorLink href={`#${productDataBase[category][i].name}`} key={i} className="product-wrapper">
				<div style={style}>
					<img src={productImages[productDataBase[category][i].iconSrc].img} alt={productDataBase[category][i].iconSrc} />
				</div>	
				<h1 className="h1">{productDataBase[category][i].title}</h1>
			</AnchorLink>
		)
	}
	return (
		<div className="flex-product">
			{products}
		</div>
	)
}

export default SmallProductList
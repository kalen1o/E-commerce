import React, { Component } from 'react';
import SmallProductList from './SmallProductList';
import ShowProducts from './ShowProducts';

import { allItems } from '../constants';
import {productImages} from '../../images';

import { connect }   from 'react-redux';
import {setProfile, addItems} from '../../store/actions';

class ProductList extends Component {
	idFunc(event) {
		if (event.target.tagName === 'BUTTON'){
			const {addItems} = this.props;
			const category = this.props.match.params.category;
			category.replace(/%20/g, " ");
			
			if (productImages[allItems[event.target.id]].quantity === 0) return alert("This product has ended. Sorry!")
			productImages[allItems[event.target.id]].quantity--;
			
			if (this.props.checkout.indexOf(event.target.id) !== -1) return alert('This product is in the bag')
			addItems(event.target.id)
		}
	}
	render() {
		return (
			<>
				<SmallProductList category={this.props.match.params.category} />	
				<ShowProducts category={this.props.match.params.category} onClick={(event) => this.idFunc(event)} />
			</>
		)
	}
}

export default connect(store => ({profile: store.profile, checkout: store.checkout}), {setProfile, addItems})(ProductList)
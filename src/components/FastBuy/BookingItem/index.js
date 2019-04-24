import React, {Component} from 'react';
import './style.css';
import { connect } from 'react-redux';
import Button from '../../Button';
import {allItems} from '../../constants';
import {productImages} from '../../../images';
import {deleteItem} from '../../../store/actions';

const Item = (props) => {
	return (
		<div className="booking-item-wrapper">
			<div className="booking-img-wrapper">
				<img src={productImages[allItems[props.index]].img} alt={productImages[allItems[props.index]].title} />
			</div>
			<div className="flex-booking">
				<div className="booking-block-wrapper">
					<p>{productImages[allItems[props.index]].price} $</p>
				</div>
				<div className="booking-block-wrapper">
					<p>{productImages[allItems[props.index]].title}</p>
				</div>
			</div>
			<Button id={productImages[allItems[props.index]].id} className="btn-booking" onClick={props.deleteItem}>Delete</Button>
		</div>
	)
}

class BookingItems extends Component {
	delete(event) {
		const {deleteItem} = this.props;
		deleteItem(event.target.id)
	}
	render() {
		console.log(this.props, 'here')
		const {checkout} = this.props;

		if (!checkout.length) {
			return (
				<div className="fast-buy-booking-wrapper">
					<h4 className="h4">Bag is empty!</h4>
				</div>
			)
		}
		return (
			<div className="fast-buy-booking-wrapper">
				{checkout.map(id => (
					<Item key={id} index={id} deleteItem={event => this.delete(event)}/>
				))}
			</div>
		)
	}
}

export default connect(store => ({checkout: store.checkout}), {deleteItem})(BookingItems)
import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Button from '../../../Button';
import { connect } from 'react-redux';

const Card = props => {
	let buyClassName = !props.buy ? 'unvisible-buy' : 'visible-buy';
	let wrapperBuyClassName = !props.buy ? 'unvisible-buy-wrapper' : 'visible-buy-wrapper'
	let checkoutButton = props.checkout.length ? [<Link to="/fastbuy" key="button"><Button className="btn-modal" onClick={event => props.buyHandler(event)}>CHECKOUT</Button></Link>] : null;
	return (
		<>
			<div className={wrapperBuyClassName} onClick={props.closeCard} />
			<div className={buyClassName}>
				<h3 className="h3">Bag</h3>
				{props.cardItem}
				{checkoutButton}
				<Button className="btn-modal" onClick={props.closeCard}>CANCEL</Button>
			</div>
		</>
	)
}

export default connect(store => ({profile: store.profile}), null)(Card);
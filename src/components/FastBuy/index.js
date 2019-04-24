import React, {Component} from 'react';
import './style.css';
import { connect } from 'react-redux';
import Button from '../Button';
import BookingItem from './BookingItem';
import {allItems} from '../constants';
import {productImages} from '../../images';
import {getBoughtProducts, newBag} from '../../store/actions';
class FastBuy extends Component {
	constructor(props) {
		super(props);
		this.profileInfo = JSON.parse(localStorage.getItem(this.props.profile))
		console.log(this.profileInfo, 'here')

		this.state = {
			firstname: !this.profileInfo ? '' : this.profileInfo.firstname,
			lastname: !this.profileInfo ? '' : this.profileInfo.lastname,
			country: this.props.location ? this.props.location.country : '',
			city: this.props.location ? this.props.location.city : '',
			address: '',
			postcode: ''
		}
	}

	getPrice = () => {
		let price = 0;
		this.props.checkout.forEach(index => {
			price += productImages[allItems[index]].price
		})
		return price
	}

	buyHandler(event) {
		event.preventDefault()
		if (!this.state.firstname || !this.state.lastname || !this.state.country || !this.state.city || !this.state.address || !this.state.postcode) return
		const {newBag} = this.props;
		if (this.props.profile) {
			let info = JSON.parse(localStorage.getItem(this.props.profile))
			info.boughtProducts.push(...this.props.checkout);
			localStorage.setItem(this.props.profile, JSON.stringify(info))
			getBoughtProducts(info.boughtProducts)
		}
		alert('Thank you for your purchase');
		this.setState({firstname: '', lastname: '', address: '', postcode: ''})
		newBag()
	}
	
	render() {
		return (
			<div className="fast-buy-wrapper">
				<h5 className="h5">Booking</h5>
				<div className="flex-fast-buy">
					<div className="fast-buy-block-wrapper">
						<form className="form" onSubmit={this.buyHandler.bind(this)}>
							<h6 className="h6">Buyer info</h6>
							<label htmlFor="Firstname1">
								<span className="label-wrapper">First name:</span> 
								<input className="input-modal" type="text" placeholder="First name" onChange={event => this.setState({firstname: event.target.value})} value={this.state.firstname} id="Firstname1" />
							</label>
							<label htmlFor="Lastname1">
								<span className="label-wrapper">Last name:</span>
								<input className="input-modal" type="text" placeholder="Last name" onChange={event => this.setState({lastname: event.target.value})} value={this.state.lastname} id="Lastname1" />
							</label>
							<h6 className="h6">Delivery</h6>
							<label htmlFor="Country">
								<span className="label-wrapper">Country:</span>
								<input className="input-modal" type="text" placeholder="Country" onChange={event => this.setState({country: event.target.value})} value={this.state.country} id="Country" />
							</label>
							<label htmlFor="City">
								<span className="label-wrapper">City:</span>
								<input className="input-modal" type="text" placeholder="City" onChange={event => this.setState({city: event.target.value})} value={this.state.city} id="City" />
							</label>
							<label htmlFor="Address">
								<span className="label-wrapper">Address:</span>
								<input className="input-modal" type="text" placeholder="Address" onChange={event => this.setState({address: event.target.value})} value={this.state.address} id="Address" />
							</label>
							<label htmlFor="Postcode">
								<span className="label-wrapper">Postcode:</span>
								<input className="input-modal" type="text" placeholder="Postcode" onChange={event => this.setState({postcode: event.target.value})} value={this.state.postcode} id="Postcode" />
							</label>
							<p className="price-wrapper">{this.getPrice()} $</p>
							<Button className="btn-buy" type="submit">Purchase now</Button>
						</form>
					</div>
					<BookingItem />
				</div>
			</div>
		)
	}
}

export default connect(store => ({profile: store.profile, checkout: store.checkout, location: store.location}), {getBoughtProducts, newBag})(FastBuy)
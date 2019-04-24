import React, { Component } from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import Button from '../Button';
import RegistrationModal from '../Modals/RegistrationModal';
import LoginModal from '../Modals/LoginModal';
import Card from './LocalComponents/Card';
import './style.css';
import {Link} from 'react-router-dom';

import { allItems } from '../constants';

import { connect }   from 'react-redux';
import {setProfile, addItems, deleteItem, getBoughtProducts, newBag} from '../../store/actions';

import { productImages } from '../../images';

import { fakeAuth } from '../../App';

class Header extends Component {
	state = {
		person: false,
		modal: false,
		login: false,
		buy: false,
		firstname: '',
		lastname: '',
		emailValue: '',
		loginValue: '',
		passValue: ''
	}

	handleScroll() {
		this.setState({scroll: window.scrollY});
	}

	componentDidMount() {
		const el = document.querySelector('header');
		this.setState({top: el.offsetTop, height: el.offsetHeight});
		window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentDidUpdate() {
		this.state.scroll > this.state.top ? 
			document.body.style.paddingTop = `${this.state.height}px` :
			document.body.style.paddingTop = 0;
	}

	modalRegistration() {
		this.setState({modal: true})
	}

	closeModalRegistration() {
		this.setState({modal: false, emailValue: '', loginValue: '', passValue: ''})
	}

	registration(event) {
		event.preventDefault()
		if(!this.state.firstname || !this.state.lastname ||  !this.state.emailValue || !this.state.loginValue || !this.state.passValue) return
		let obj = {
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.emailValue,
			password: this.state.passValue,
			boughtProducts: []
		}

		localStorage.setItem(this.state.loginValue, JSON.stringify(obj))

		this.setState({modal: false, emailValue: '', loginValue: '', passValue: ''});
	}

	modalLogin() {
		this.setState({login: true})
	}

	closeLogin() {
		this.setState({login: false, firstname: '', lastname:'', emailValue: '', loginValue: '', passValue: ''})
	}

	login(event) {
		event.preventDefault()
		const { setProfile, getBoughtProducts } = this.props;
		if (!this.state.passValue) return
		let obj = JSON.parse(localStorage.getItem(this.state.loginValue))
		
		if (obj) {
			if (this.state.passValue === obj.password) {
				setProfile(this.state.loginValue)
				getBoughtProducts(obj.boughtProducts)
				fakeAuth.authenticate(() => {
					this.setState({person: true, login: false})
				})
			} else {
				this.setState({passValue: ''})
			}
		} else {
			this.setState({passValue: ''})
		}
	}

	checkout() {
		this.setState({buy: true})
	}

	closeCard() {
		this.setState({buy: false})
	}

	logout() {
		const { setProfile, newBag } = this.props;
		setProfile(null)
		newBag()
		fakeAuth.signOut(() => {
			this.setState({person: false, loginValue: '', passValue: ''})
		})

		console.log(this.props)
	}

	delete(event) {
		if (event.target.tagName === 'BUTTON'){
			const {deleteItem} = this.props;
			deleteItem(event.target.id)
		}
	}

	getCardItems() {
		let bag = [];
		if(!this.props.checkout.length) {
			return (
				<h4 className="h4">Bag is empty!</h4>
			)
		}
		this.props.checkout.forEach(item => {
			bag.push(
				<div key={item} className="flex-box">
					<img src={productImages[allItems[item]].img} alt={allItems[item]}/>
					<p className="price">{productImages[allItems[item]].price} $</p>
					<Button key={item} id={item} onClick={event => this.delete(event)} className="btn-modal">Delete</Button>
				</div>
			)
		})
		return bag;
	}

	buyHandler(event) {
		const {getBoughtProducts} = this.props;
		
		if(this.props.profile) {
			this.setState({buy: false});
			// let info = JSON.parse(localStorage.getItem(this.props.profile))
			// info.boughtProducts.push(...this.props.checkout);
			// localStorage.setItem(this.props.profile, JSON.stringify(info))
			// getBoughtProducts(info.boughtProducts)
		} else {
			this.setState({buy: false})
		}
	}
	render() {
		let buttons = !this.state.person ? 
						[<Button key="1" onClick={this.checkout.bind(this)} className="auth-btn" icon="shopping-cart"/>, <Button key="2" onClick={this.modalRegistration.bind(this)} className="auth-btn" icon="sign-in-alt" />, <Button key="3" onClick={this.modalLogin.bind(this)} className="auth-btn" icon="user" />] : 
						[<Button key="4" onClick={this.checkout.bind(this)} className="auth-btn" icon="shopping-cart"/>, <Link to='/profile' key="5"><Button className="auth-btn" icon="users-cog" /></Link>, <Button key="6" onClick={this.logout.bind(this)} className="auth-btn" icon="user-times" />];
		return (
			<header className={this.state.scroll > this.state.top ? "header fixed-header" : "header"}>
				<Logo />
				<Menu />
				
				{buttons}

				{/* REGISTRATION */}
				<RegistrationModal 
					isOpen={this.state.modal} 
					onClose={this.closeModalRegistration.bind(this)}
					onChangeFirstname={event => this.setState({firstname: event.target.value})}
					firstname={this.state.firstname}
					onChangeLastname={event => this.setState({lastname: event.target.value})}
					lastname={this.state.lastname}
					onChangeEmail={event => this.setState({emailValue: event.target.value})}
					emailValue={this.state.emailValue}
					onChangeLogin={event => this.setState({loginValue: event.target.value})}
					loginValue={this.state.loginValue}
					onChangePassword={(event) => this.setState({passValue: event.target.value})}
					passValue={this.state.passValue}
					onRegistration={this.registration.bind(this)}
				/>
				{/* LOGIN */}
				<LoginModal 
					isOpen={this.state.login}
					onClose={this.closeLogin.bind(this)}
					onChangeLogin={event => this.setState({loginValue: event.target.value})}
					loginValue={this.state.loginValue}
					onChangePassword={(event) => this.setState({passValue: event.target.value})}
					passValue={this.state.passValue}
					onLogIn={this.login.bind(this)}
				/>
				{/* BUY */}
				<Card
					buy={this.state.buy}
					closeCard={this.closeCard.bind(this)}
					cardItem={this.getCardItems()}
					checkout={this.props.checkout}
					buyHandler={this.buyHandler.bind(this)}
				/>
			</header>
		)
	}
}

export default connect(store => ({profile: store.profile, checkout: store.checkout}), {setProfile, addItems, deleteItem, getBoughtProducts, newBag})(Header)
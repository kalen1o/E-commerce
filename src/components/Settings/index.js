import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import Button from '../Button';

class Settings extends Component {
	constructor(props) {
		super(props)
		this.profileInfo = JSON.parse(localStorage.getItem(this.props.profile))
		console.log(this.profileInfo)
		this.state = {
			firstname: this.profileInfo.firstname,
			lastname: this.profileInfo.lastname,
			emailValue: this.profileInfo.email,
			emailDisable: true,
			passValue: this.profileInfo.password,
			passDisable: true,
			boughtProducts: this.profileInfo.boughtProducts
		}
	}

	render() {
		return (
			<div className="settings-wrapper">
				<h5 className="h5"> Welcome, {this.props.profile}!</h5>
				<label htmlFor="FirstNameSettings">
					<span className="label-wrapper">Firstname:</span>
					<input disabled onChange={event => this.setState({firstname: event.target.value})} type="text" placeholder="Firstname" className="input-settings-disabled" value={this.state.firstname} id="FirstNameSettings"/>
				</label>
				<label htmlFor="LastNameSettings">
					<span className="label-wrapper">Lastname:</span>
					<input disabled onChange={event => this.setState({lastname: event.target.value})} type="text" placeholder="Lastname" className="input-settings-disabled" value={this.state.lastname} id="LastNameSettings"/>
				</label>
				<label htmlFor="EmailSettings">
					<span className="label-wrapper">Email:</span>
					<input disabled={this.state.emailDisable} onChange={event => this.setState({emailValue: event.target.value})} type="email" placeholder="Email" className="input-settings" value={this.state.emailValue} id="EmailSettings"/>
					<Button 
						onClick={() => {
							this.setState({emailValue: '', emailDisable: false})
						}} className="btn-change">
						Change
					</Button>
				</label>
				<label htmlFor="PassSettings">
					<span className="label-wrapper">Password:</span>
					<input disabled={this.state.passDisable} onChange={event => this.setState({passValue: event.target.value})} type="password" placeholder="Password" className="input-settings" value={this.state.passValue} id="PassSettings"/>
					<Button 
						onClick={() => {
							let confirm = prompt("Repeat you current password");
							if(confirm === this.state.passValue) this.setState({passValue: '', passDisable: false})
						}} 
						className="btn-change"
					>
						Change
					</Button>
				</label>
				<Button
					onClick={() => {
						let info = JSON.parse(localStorage.getItem(this.props.profile))
						info.email = this.state.emailValue;
						info.password = this.state.passValue;
						localStorage.setItem(this.props.profile, JSON.stringify(info))
					}}
					className="btn-save" 
				>
					Save
				</Button>
			</div>
		)
	}
}

export default connect(store => ({profile: store.profile, checkout: store.checkout}), null)(Settings)
import React, { Component } from 'react';
import './style.css';
import Modal from 'react-modal';
import Button from '../../Button';
const customStyles = {
	content: {
		display: "block",
		color: "black",
		backgroundColor: "white",
		position: "fixed",
		top: "50%",
		left: "50%",
		right: "0",
		bottom: "auto",
		transform: "translate(-50%, -50%)",
		width: "40%",
		textAlign: "center",
		padding: "30px"
	}
}

Modal.setAppElement('#root')
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, .5)';

class RegistrationModal extends Component {
	render() {
		return (
			<Modal 
				isOpen={this.props.isOpen}	
				onRequestClose={this.props.onClose}
				style={customStyles}
			>
				<h3 className="h3">Registration</h3>
				<form className="form-wrapper" onSubmit={this.props.onRegistration}>
					<label htmlFor="Firstname">
						<span className="label-wrapper">Firstname:</span>
						<input onChange={this.props.onChangeFirstname} type="text" placeholder="Firstname" className="input-modal" value={this.props.firstname} id="Firstname"/>
					</label>
					<label htmlFor="Lastname">
						<span className="label-wrapper">Lastname:</span>
						<input onChange={this.props.onChangeLastname} type="text" placeholder="Lastname" className="input-modal" value={this.props.lastname} id="Lastname"/>
					</label>
					<label htmlFor="Email">
						<span className="label-wrapper">Email:</span>
						<input onChange={this.props.onChangeEmail} type="email" placeholder="Email" className="input-modal" value={this.props.emailValue} id="Email"/>
					</label>
					<label htmlFor="Login">
						<span className="label-wrapper">Login:</span>
						<input onChange={this.props.onChangeLogin} type="text" placeholder="Login" className="input-modal" value={this.props.loginValue} id="Login"/>
					</label>
					<label htmlFor="Password">
						<span className="label-wrapper">Password:</span>
						<input onChange={this.props.onChangePassword} type="password" placeholder="Password" className="input-modal" value={this.props.passValue} id="Password"/>
					</label>
					<Button type="submit" className="btn-modal">OK</Button>
					<Button onClick={this.props.onClose} className="btn-modal">CANCEL</Button>
				</form>
			</Modal>
		)
	}
}

export default RegistrationModal
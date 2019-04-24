import React, {Component} from 'react';
import logo from '../../images/logo-2.png';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Footer extends Component {
	linkFunc(link) {
		console.log(link)
		window.open(`${link}`)
	}

	render() {
		return (
			<div className="footer">
				<div>
					<a href="https://www.facebook.com/HyperxGaming" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook']} className="footer-icon"/></a>
					<a href="https://www.youtube.com/user/KingstonHyperXRU" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'youtube']} className="footer-icon"/></a>
					<a href="https://www.instagram.com/hyperxru/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'instagram']} className="footer-icon"/></a>
				</div>
				<img src={logo} alt="logo"/>
			</div>
		)
	}
}
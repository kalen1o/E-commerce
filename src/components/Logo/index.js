import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './index.css';

const Logo = () => (
	<Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
)

export default Logo;
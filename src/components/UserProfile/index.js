import React, { Component } from 'react';
import Settings from '../Settings';
import BoughtProducts from '../BoughtProducts';

class UserProfile extends Component {
	render() {
		return (
			<>
				<Settings />
				<BoughtProducts />
			</>
		)
	}
}

export default UserProfile
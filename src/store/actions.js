export const setProfile = (profile) => ({
	type: 'SET_PROFILE',
	payload: {profile}
})

export const addItems = (checkout) => ({
	type: 'ADD_ITEM',
	payload: {checkout}
})

export const deleteItem = (checkout) => ({
	type: 'DELETE_ITEM',
	payload: {checkout}
})

export const newBag = () => ({
	type: 'NEW_BAG',
	payload: {checkout: []}
})

export const getBoughtProducts = (boughtProducts) => ({
	type: 'GET_BOUGHT_PRODUCTS',
	payload: {boughtProducts}
})

const API_KEY = 'd0a90443708a448a9f65a7c7cfe6a2ea';

export const fetchLocation = (latitude, longitude) => dispatch => {
	fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${API_KEY}&language="en"`)
		.then(response => response.json())
			.then(response => dispatch({
				type: 'GET_LOCATION',
				payload: {location: response.results[0].components}
			}))
}
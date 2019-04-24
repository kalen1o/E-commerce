const initialState = {
	profile: null,
	checkout: [],
	boughtProducts: [],
	location: null
}

function reducer (state = initialState, action) {
	switch (action.type) {
		case 'SET_PROFILE':
			return {
				...state,
				profile: action.payload.profile
			}

		case 'ADD_ITEM':
			return {
				...state,
				checkout: [...state.checkout, action.payload.checkout]
			}

		case 'DELETE_ITEM':
			return {
				...state,
				checkout: state.checkout.filter(item => item !== action.payload.checkout)
			}

		case 'NEW_BAG':
			return {
				...state,
				checkout: action.payload.checkout
			}

		case 'GET_BOUGHT_PRODUCTS':
			return {
				...state,
				boughtProducts: action.payload.boughtProducts
			}

		case 'GET_LOCATION':
			return {
				...state,
				location: action.payload.location
			}

		default:
			return state;
	}
}

export default reducer;
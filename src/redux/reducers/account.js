const initState = {
	sign: '',
	signError: '',
	userAddress: ''
};

export const account = (state = initState, action) => {
	switch (action.type) {
		case "SET_SIGN": {
			return {
				...state,
				sign: action.data
			}
		}
		case "SET_SIGN_ERROR": {
			return {
				...state,
				signError: action.data
			}
		}
		case "SET_USER_ADDRESS": {
			return {
				...state,
				userAddress: action.data
			}
		}
	    default: return state;
	}
}

export const setSign = (data) => ({type: "SET_SIGN", ...data});
export const setSignError = (data) => ({type: "SET_SIGN_ERROR", ...data});
export const setUserAddress = (data) => ({type: "SET_USER_ADDRESS", ...data});
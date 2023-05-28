const initState = {
	web3: '',
	signMess: ''
};

export const web3modal = (state = initState, action) => {
	switch (action.type) {
		case "SET_WEB3": {
			return {
				...state,
				web3: action.data
			}
		}
		case "SET_SIGN_MESS": {
			return {
				...state,
				signMess: action.data
			}
		}
	    default: return state;
	}
}

export const setWeb3 = (data) => ({type: "SET_WEB3", ...data});
export const setSignMess = (data) => ({type: "SET_SIGN_MESS", ...data});
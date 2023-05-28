import { web3modal, account} from "./reducers";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    web3modal, 
    account
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}


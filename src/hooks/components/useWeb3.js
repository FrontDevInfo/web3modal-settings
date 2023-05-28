import { useEffect } from 'react';
import { useDisconnect, useNetwork, useSignMessage, useAccount } from 'wagmi';
import { useWeb3Modal } from "@web3modal/react";
import { useDispatch, useSelector } from "react-redux";
import { setSign, setSignError } from '../../redux/reducers/account';
import { ethers } from "ethers";

const accountSelector = s => s.account;

export const useWeb3 = () => {
	const dispatch = useDispatch();
	const {chain, chains} = useNetwork();
	const { open } = useWeb3Modal();
	const { disconnect, isError, error } = useDisconnect();
	const { address, isConnecting, connector, isDisconnected } = useAccount()

	const { sign } = useSelector(accountSelector);
	const { signMessage } = useSignMessage();
    const userSign = sign;

	useEffect(() => {
		const isCorrectChain = chains?.find(item => item.id === chain?.id)
		if(!isCorrectChain) {
			onDisconnect()
		}
	}, [chain, chains])

	const onConnect = async() => {
		try {
			var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) {
	        	return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

			if (isSafari) {
		        return false;
		    }

			await open();

		} catch(e) {
			console.log('Connect error: ', e)
		}
	}

	const onDisconnect = async() => {
        try {
        	await disconnect();
	        await localStorage.clear();
			dispatch(setSign({data: ""}));
            dispatch(setSignError({data: ""}));
        } catch(e) {
			if(isError) {
				console.log("Disconnect error: ", error)
			}
        }
	}

	 // Log in
	 const userLogIn = async () => {
        dispatch(setSignError({data: ""}));
        const mess =  'Улыбнись';
        if(mess && typeof mess == 'string' && connector) {
            try {
                const sign = signMessage(({
                    message: mess,
                }));

                dispatch(setSign({data: sign}));
                dispatch(setSignError({data: ""}));
            } catch (err) {
                console.log(err.reason || err.message);
                const error = err.reason || err.message
                dispatch(setSignError({data: error}));
            }         
        }
    }

	const toWei = (amount, decimals = 18) => ethers.utils.parseUnits(amount, decimals);
	const fromWei = (amount, decimals = 18) => ethers.utils.formatUnits(amount, decimals);

	return { onDisconnect, onConnect, userSign, userLogIn, toWei, fromWei}
}
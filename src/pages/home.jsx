import React from "react";
import { useWeb3 } from "../hooks";
import { config } from "../app-config";
import { useAccount, useNetwork } from 'wagmi'

const Home = () => {
    const { onConnect, onDisconnect, userLogIn } = useWeb3();
    const { address, isConnected } = useAccount()
    const { chain } = useNetwork()
    
    const connectHandle = () => {
        if(config.is_iphone && !window.ethereum ) {
            window.location.replace(`https://metamask.app.link/dapp/${window.location.hostname}`);
            onConnect();
        } else {
            onConnect(); 
        }
    }

    return (
        <div className="page_container">
            {isConnected ?
                <button 
                    className="btn" 
                    onClick={() => {onDisconnect()}}>
                        Disconnect
                </button>
                :
                <button 
                    className="btn" 
                    onClick={connectHandle}>
                        Connect to Metamask
                </button>}

                <button 
                    disabled={!isConnected}
                    className="btn sign_btn" 
                    onClick={userLogIn}>
                        Sign message
                </button>

            {
                isConnected && (
                    <div className="info">
                        <p className="text">
                            <strong>isConnecteded:</strong> {`${isConnected}`};
                        </p>

                        <p className="text">
                            <strong>userAddress:</strong> {address};
                        </p>

                        <p className="text">
                            <strong>chainId:</strong> {chain.id};
                        </p>

                        <p className="text">
                            <strong>network:</strong> {chain.name};
                        </p>
                    </div>
                )
            }         
        </div>
    )
}

export default Home;
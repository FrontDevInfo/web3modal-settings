import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { setupStore } from "./redux";
import { chains } from "./constants/chains.config";
import { config } from "./app-config";
import './index.scss';
import ErrorBoundry from './components/error-boundry';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = setupStore();

// Wagmi client
const { publicClient } = configureChains(chains, [w3mProvider({ projectId: config.walletConnectId })])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId: config.walletConnectId, version: 1, chains }),
  publicClient
})

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiConfig, chains)
// 

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <>
      <WagmiConfig config={wagmiConfig}>
        <Provider store={store}>
          <ErrorBoundry>
            <App />
            </ErrorBoundry>
        </Provider>
      </WagmiConfig>

      <Web3Modal
        projectId={config.walletConnectId}
        ethereumClient={ethereumClient}
        themeMode={"light"}
        themeColor={"default"}
        // Select a network before connecting
        enableNetworkView={true}
      />
    </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

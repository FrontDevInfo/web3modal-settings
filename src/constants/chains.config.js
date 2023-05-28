import { isMainnet } from "../app-config";
import { avalanche, bsc, mainnet, fantom, fantomTestnet, polygon, gnosis, harmonyOne, bscTestnet } from 'wagmi/chains';

export const defaultChain = isMainnet ?  bsc : bscTestnet;
export const chains = isMainnet ? [{
    ...mainnet 
}, {
    ...avalanche
}, {
    ...bsc,
}, {
    ...polygon
}, {
    ...fantom
}, {
    ...gnosis
}, {
   ...harmonyOne
}, {
    id: 195,
    name: 'Tron Mainnet',
    network: 'tron-mainnet',
    nativeCurrency: {
        decimals: 18,
        name: 'Tron',
        symbol: 'TRX',
    },
    rpcUrls: {
        default: {
            http: ['https://api.trongrid.io']
        },
        public: {
            http: ['https://api.trongrid.io']
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'tronscan',
            url: 'https://tronscan.org/'
        },
        default: {
            name: 'tronscan',
            url: 'https://tronscan.org/'
        },
    },
}] : [{
   ...fantomTestnet
}, {
    id: 1666700000,
    name: 'Harmony Testnet',
    network: 'harmony-testnet',
    nativeCurrency: {
        decimals: 8,
        name: 'Harmony',
        symbol: 'ONE',
    },
    rpcUrls: {
        default: {
            http: ['https://api.s0.b.hmny.io']
        },
        public: {
            http: ['https://api.s0.b.hmny.io']
        },
    },
    blockExplorers: {
        etherscan: {
            name: 'explorer.harmony',
            url: 'https://explorer.ps.hmny.io/'
        },
        default: {
            name: 'explorer.harmony',
            url: 'https://explorer.ps.hmny.io/'
        },
    },
}, {
    ...bscTestnet,
}]
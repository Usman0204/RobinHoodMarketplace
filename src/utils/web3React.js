
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { BscConnector } from '@binance-chain/bsc-connector'
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { Web3Provider } from "@ethersproject/providers";

import getNodeUrl from './getRpcUrl'
const ConnectorNames = {
    Injected: "injected",
    WalletConnect: "walletconnect",
    BSC: "bsc"
}

const POLLING_INTERVAL = 12000
const rpcUrl = getNodeUrl()

const chainId = parseInt(process.env.REACT_APP_CHAIN_ID, 10)
// export const injectedForCustomHook = new InjectedConnector({ supportedChainIds: [chainId] })
export const injected = new InjectedConnector({ supportedChainIds: [chainId] })
export const walletconnect = new WalletConnectConnector({
    rpc: { [chainId]: rpcUrl },
    bridge: 'https://bridge.walletconnect.org',
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
    qrcodeModalOptions: {
        mobileLinks: [
            "rainbow",
            "metamask",
            "argent",
            "trust",
            "imtoken",
            "pillar",
        ],
    },
})
export const fortmatic = new FortmaticConnector({
    // rpc: { [chainId]: rpcUrl },
    apiKey: "pk_test_E6435963F646B443",
    chainId: 1,

});
const bscConnector = new BscConnector({ supportedChainIds: [chainId] })

export const connectorsByName = {
    [ConnectorNames.Injected]: injected,
    [ConnectorNames.WalletConnect]: walletconnect,
    [ConnectorNames.BSC]: bscConnector,
}

export const getLibraryForSign = (provider) => {
    try {
        const library = new Web3Provider(provider);
        return library
    } catch (error) {
        console.log("web3 provider not found", error)
    }
}

export const getLibrary = (provider) => {
    try {
        return provider
    } catch (error) {
        console.log("web3 provider not found", error)
    }
}


import {InjectedConnector} from '@web3-react/injected-connector'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'


export const coinbaseWallet = new WalletLinkConnector({
  url: `https://bsc-dataseed1.defibit.io/`,
  appName: "finance-dashboard",
  supportedChainIds: 56,
 });

export const injected = new InjectedConnector({
    supportedChainIds: [56, 97]
});

export const walletConnect = new WalletConnectConnector({
  rpc: {
    56: 'https://bsc-dataseed1.defibit.io/'
  },
  qrcode: true,
});

function MetamaskProvider({ children }) {
    const { active: networkActive, error: networkError, activate: activateNetwork } = useWeb3React()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
      injected
        .isAuthorized()
        .then((isAuthorized) => {
          setLoaded(true)
          if (isAuthorized && !networkActive && !networkError) {
            activateNetwork(injected)
          }
        })
        .catch(() => {
          setLoaded(true)
        })
    }, [activateNetwork, networkActive, networkError])
    if (loaded) {
      return children
    }
  }
  
export default MetamaskProvider
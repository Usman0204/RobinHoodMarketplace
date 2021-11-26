import { useEffect } from 'react'
import useAuth from './useAuth'
const ConnectorNames =  {
  Injected : "injected",
  WalletConnect : "walletconnect",
  Fortmatic:"fortmatic",
  BSC : "bsc"
}
const useEagerConnect = () => {
  const { login } = useAuth()
  // const item = window.localStorage.getItem("flag")
  useEffect(() => {
    
    const connectorId = window.localStorage.getItem("connectorId")
      if (connectorId && connectorId !== ConnectorNames.BSC) {
        console.log("connectorId================",connectorId)
              login(connectorId)
            }
  }, [login])
}

export default useEagerConnect

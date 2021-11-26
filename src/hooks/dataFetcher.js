import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
// import { getBep20Contract } from '../utils/contractHelpers'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'
import environment from '../utils/Environment';

const useTokenBalance = () => {
    // console.log("useRefresh",useRefresh)
    const [balance, setBalance] = useState(new BigNumber(0))
    const { account } = useWeb3React()
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.ContractAddress;
    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         const contract = getBep20Contract(tokenAddress, web3)
    //         const res = await contract.methods.balanceOf(account).call()
    //         setBalance(new BigNumber(res))
    //     }
    //     if (account) {
    //         fetchBalance()
    //     }
    // }, [account, tokenAddress, web3, fastRefresh])

    // return balance
}

const useContractBalance = () => {
    const [balance, setBalance] = useState(new BigNumber(0))
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.ContractAddress;
    useEffect(() => {
        const fetchBalance = async () => {
            const res = await web3.eth.getBalance(environment.ContractAddress)
            setBalance(new BigNumber(res))
        }
        fetchBalance()
    }, [tokenAddress, web3, fastRefresh])

    return balance
}

const useUserReward = () => {
    const [balance, setBalance] = useState(new BigNumber(0))
    const { account } = useWeb3React()
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.ContractAddress;
    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         const contract = getBep20Contract(tokenAddress, web3)
    //         const res = await contract.methods.calculateBNBReward(account).call()
    //         setBalance(new BigNumber(res))
    //     }
    //     if (account) {
    //         fetchBalance()
    //     }
    // }, [account, tokenAddress, web3, fastRefresh])

    // return balance
}

const useMaxTx = () => {
    const [balance, setBalance] = useState(new BigNumber(0))
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    const tokenAddress = environment.ContractAddress;
    // useEffect(() => {
    //     const fetchBalance = async () => {
    //         const contract = getBep20Contract(tokenAddress, web3)
    //         const res = await contract.methods._maxTxAmount().call()
    //         setBalance(new BigNumber(res))
    //     }
    //     fetchBalance()
    // }, [tokenAddress, web3, fastRefresh])

    // return balance
}

const useEthBalance = () => {
    const [balance, setBalance] = useState(new BigNumber(0))
    const { account } = useWeb3React()
    const web3 = useWeb3()
    const { fastRefresh } = useRefresh()
    useEffect(() => {
        const fetchBalance = async () => {
            const res = await web3.eth.getBalance(account)
            // console.log("balance", res)
            setBalance(new BigNumber(res))
        }
        if (account) {
            fetchBalance()
        }
    }, [account, web3, fastRefresh,balance])

    return balance
}
// export default useTokenBalance
export default useEthBalance

export { useContractBalance, useUserReward, useMaxTx, useEthBalance };
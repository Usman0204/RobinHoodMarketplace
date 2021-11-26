import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { BlueMoonProContract, BlueMoonMarketPlaceContract, BlueMoonUniqueContract, BlueMoonFreshContract } from '../utils/contractHelpers';
import Web3 from 'web3';
export const BuyUningBnb = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.Fudge;
    const blueMoonUsecontract = environment.BlueMoonPro;
    const contract = BlueMoonMarketPlaceContract(tokenAddress, web3)
    const BnbBuy = useCallback(async (tokenId, price) => {
        const priceToUse = (price * (10 ** 18))
        const buy = await contract.methods.buy(blueMoonUsecontract, tokenId).send({ from: account, value: priceToUse })
        return buy
    }, [account, contract, blueMoonUsecontract])

    return { BnbBuy: BnbBuy }
}

export const ApproveForAll = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const bluemoon = environment.BlueMoonPro;
    // const contract = BlueMoonMarketPlaceContract(bluemoon, web3)
    const contract = BlueMoonProContract(bluemoon, web3)
    // const blueMoonMarketplace = environment.Fudge;
    const blueMoonMarketplace = environment.BlueMoonMarketPlace;
    const approve = useCallback(async () => {
        const approveAll = await contract.methods.setApprovalForAll(blueMoonMarketplace, true).send({ from: account })
        return approveAll
    }, [account, contract, blueMoonMarketplace])
    return { Approved: approve }
}



export const ApproveForPro = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const bluemoon = environment.BlueMoonPro;
    const contract = BlueMoonProContract(bluemoon, web3)
    const blueMoonMarketplace = environment.BlueMoonMarketPlace;
    const approve = useCallback(async () => {
        const approveAll = await contract.methods.setApprovalForAll(blueMoonMarketplace, true).send({ from: account })
        return approveAll
    }, [account, contract, blueMoonMarketplace])

    return { ApprovedForPro: approve }
}

export const ApproveForUnique = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const bluemoon = environment.BlueMoonUnique;
    const contract = BlueMoonUniqueContract(bluemoon, web3)
    const blueMoonMarketplace = environment.BlueMoonMarketPlace;
    const approve = useCallback(async () => {
        const approveAll = await contract.methods.setApprovalForAll(blueMoonMarketplace, true).send({ from: account })
        return approveAll
    }, [account, contract, blueMoonMarketplace])

    return { ApprovedForUnique: approve }
}

export const ApproveForFresh = () => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const bluemoon = environment.BlueMoonFresh;
    const contract = BlueMoonFreshContract(bluemoon, web3)
    const blueMoonMarketplace = environment.BlueMoonMarketPlace;
    const approve = useCallback(async () => {
        const approveAll = await contract.methods.setApprovalForAll(blueMoonMarketplace, true).send({ from: account })
        return approveAll
    }, [account, contract, blueMoonMarketplace])

    return { ApprovedForFresh: approve }
}






export const BnbSalePrice = () => {

    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.BlueMoonMarketPlace;
    const contract = BlueMoonMarketPlaceContract(tokenAddress, web3)
    const BnbSale = useCallback(async (tokenAddress, tokenId, price) => {
        const priceToUse = Web3.utils.toWei(price + "")
        const sale = await contract.methods.setSalePrice(tokenAddress, tokenId, priceToUse).send({ from: account })
        return sale
    }, [account, contract])

    return { BnbSale: BnbSale }
}







import { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import useWeb3 from './useWeb3';
import environment from '../utils/Environment';
import { BlueMoonMarketPlaceContract, BlueMoonProContract, BlueMoonUniqueContract, BlueMoonFreshContract, BlueMoonCustomCollectionContract } from '../utils/contractHelpers'

// export const MintNft = (uri) => {
//     const { account } = useWeb3React();
//     const web3 = useWeb3();
//     const tokenAddress = environment.BlueMoonPro;
//     const contract = BlueMoonProContract(tokenAddress, web3)
//     const MintProFun = useCallback(async () => {
//         const  mint=  await contract.methods.mintPro(account,uri).send({ from: account, value: '1000000000000', gas: '1000000000', gasLimit: '223232' }).on('transactionHash', (tx) => { return tx.transactionHash });
//         return mint;
//     }, [account, contract])

//     return { MintPro: MintProFun }
// }

export const MintPro = (uri) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.BlueMoonPro;
    const contract = BlueMoonProContract(tokenAddress, web3)
    const MintProFun = useCallback(async () => {
        const mint = await contract.methods.mintPro(account, uri)
            .send({
                from: account
            })
            .on('transactionHash', (tx) => {
                console.log("trx hash", tx)
                return tx.transactionHash
            });
            // .send({
            //     from: account,
            //     value: '1000000000000',
            //     gas: '1000000000',
            //     gasLimit: '223232'
            // })
        return  mint.events.Transfer.returnValues.tokenId;
    }, [account, contract])

    return { mintPro: MintProFun }
}

export const MintUnique = (uri) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.BlueMoonPro;
    const contract = BlueMoonUniqueContract(tokenAddress, web3)


    const MintUniqueFun = useCallback(async () => {
        const mint = await contract.methods.mintUnique(account, uri).send({ from: account, value: '1000000000000', gas: '1000000000', gasLimit: '223232' }).on('transactionHash', (tx) => { return tx.transactionHash });
        return mint;
    }, [account, contract])

    return { mintUnique: MintUniqueFun }
}

export const MintFresh = (uri) => {
    const { account } = useWeb3React();
    const web3 = useWeb3();
    const tokenAddress = environment.BlueMoonPro;
    const contract = BlueMoonProContract(tokenAddress, web3)
    const MintFreshFun = useCallback(async () => {
        const mint = await contract.methods.mintFresh(account, uri).send({ from: account, value: '1000000000000', gas: '1000000000', gasLimit: '223232' }).on('transactionHash', (tx) => { return tx.transactionHash });
        return mint;
    }, [account, contract])

    return { mintFresh: MintFreshFun }
}
// export default Mint;
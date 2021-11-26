import axios from 'axios';
import { API_URL } from '../utils/ApiURL';
// import { useDispatch } from 'react-redux'

// import { useSelector } from 'react-redux';
export const AddProfile = async (data) => {
    // console.log("data", data)
    const addUser = await axios.post(`${API_URL}/v1/auth/register`, data)
        .then((res) => {
            console.log("res", res)
            return res;
        }).catch((e) => {
            console.log("err", e)
            return e;
        });
    return addUser
}

export const LoginProfile = async (data) => {
    const addUser = await axios.post(`${API_URL}/v1/auth/login`, data)
        .then((res) => {
            console.log("res", res);
            // const push = (toast) => 
            return res;
        }).catch((e) => {
            console.log("err", e)
            return e;
        });
    return addUser
}

export const EditProfile = async (data, file, datatoken) => {
    // const tokenauth = useSelector((state) => state.UserReducer.tokenauth)
    console.log("tokenauth", datatoken)

    // const send = { ...data, ipfsImageUrl: file }
    // const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzYzOTQwMzUsImlhdCI6MTYzNjM3MjQzNSwic3ViIjoiNjE4OGM2ZTM3YjYxOWM2MmQzMjA2OGE3IiwiYWRkcmVzcyI6IjB4N2VmOGU1NjQzNDI0YmVkNzYzZGQxYmRlNjZkNGIyZjc5ZjllZGNkOCJ9.1L86TDVAWq-uCAf8mTQXn8ERK6xcNVZgn9QbJIeqohA";
    const send = { ...data, picture: file }
    const editUser = await axios.patch(`${API_URL}/v1/users`, send, { headers: { Authorization: `Bearer ${datatoken}` } })
        .then((res) => {
            console.log(res)
            try {
            } catch (err) {
                console.log("err", err)

            }
            return true;
        }).catch((e) => {
            console.log("err", e)
            return false;
        });
    return editUser
}

export const CreateNft = async (data, file) => {
    const send = { ...data, ipfsImageUrl: file }
    const createNFT = await axios.post(`${API_URL}/user/editUser`, send)
        .then((res) => {
            console.log(res)
            try {
            } catch (err) {
                console.log("err", err)
                // return false;
            }
        })
    return createNFT
}
export const addToken = async (data, inputList, contractAddress, account, fileUrl, tokenId, datatoken) => {
    // const send = { data, attributes: inputList, contractAddress: contractAddress, walletAddress: account, imageUrl: fileUrl, tokenID: tokenId }
    const send = { description: data.descriptionn, royalties: data.royalty, category: inputList[0].trait_type, name: inputList[0].value, contractAddress: contractAddress, walletAddress: account, imageUrl: fileUrl, tokenID: tokenId }
    // console.log("data", send)
    console.log("tokenauth", datatoken)
    await axios.post(`${API_URL}/v1/token`, send, { headers: { Authorization: `Bearer ${datatoken}` } })
        .then((res) => {
            console.log("res", res)
            return res;
        }).catch((err) => {
            console.log("err", err)
            return err;
        })
}
export const addTokenAndPutOnSale = async (data, inputList, contractAddress, account, fileUrl, tokenId, datatoken) => {
    // const send = { data, attributes: inputList, contractAddress: contractAddress, walletAddress: account, imageUrl: fileUrl, tokenID: tokenId }
    const send = {
        description: data.descriptionn,
        royalties: data.royalty, instantSalePrice: data.minimum, priceforsale: data.minimum, category: inputList[0].trait_type,
        name: inputList[0].value, contractAddress: contractAddress, walletAddress: account, imageUrl: fileUrl, tokenID: tokenId
    }
    // console.log("data", send)
    // console.log("tokenauth", datatoken)
    await axios.post(`${API_URL}/v1/token/createAndPublish`, send, { headers: { Authorization: `Bearer ${datatoken}` } })
        .then((res) => {
            console.log("res", res)
            return res;
        }).catch((err) => {
            console.log("err", err)
            return err;
        })
}
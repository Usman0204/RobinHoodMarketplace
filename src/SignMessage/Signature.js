// import { useWeb3React  } from "@web3-react/core";
// import { useCallback } from "react";
// import { AddProfile } from "../services/services";
// import { getLibraryForSign} from "../utils/web3React";
// import { toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Web3 from 'web3';

// export const Signature = (data) => {
//   // const { account } = useWeb3React()
//   const { account } = useWeb3React()
//   const library = getLibraryForSign(Web3.givenProvider)
//   const sign = useCallback(async () => {
//     if ((library && account)) {
//       library
//         .getSigner(account)
//         .signMessage(data)
//         .then(signature => {
//           // window.alert(`Success!\n\n${signature}${data}`);
//           toast.success(signature, {
//             position: "top-right",
//             autoClose: 2000,
//             });
//           // AddProfile({ walletAddress: data })
//         })
//         .catch(error => {
//           toast.error(error && error.message, {
//             position: "top-right",
//             autoClose: 2000,
//             });
//           // window.alert(
//           //   "Failure!" +
//           //   (error && error.message ? `\n\n${error.message}` : "")
//           // );
//         });

//     }
//     return sign;
//   }, [account, library,data])
//   return { userSign: sign }
// }

// export default Signature

import { useWeb3React } from "@web3-react/core";
import { useCallback } from "react";
import { LoginProfile, AddProfile } from "../services/services";
import { getLibraryForSign } from "../utils/web3React";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Web3 from 'web3';
import { useDispatch } from 'react-redux'
import { Auth } from "../redux/action";

export const Signature = (data) => {
  let i =0;
  const dispatch = useDispatch()
  const { account } = useWeb3React()
  const library = getLibraryForSign(Web3.givenProvider)


  const sign = useCallback(async () => {
    if ((library && account)) {
      let signing = library
        .getSigner(account);

      try {
        let signature = await signing.signMessage(
          `Welcome to Open Canvas!
             Click "Sign" to sign in. No password needed!
             This request will niether trigger blockchain transaction nor cost any gas fees.
             Your authentication status will be reset after 24 hours.
             I accept the BlueMoon Terms of Service: https://opencanvas.app/
             Wallet address:
            ${data}`
        );
        toast.success(`${signature.substring(0, 6)}...${signature.substring(signature.length - 4)}`, {
          position: "top-right",
          autoClose: 2000,
        });
        AddProfile({ address: data })
        const userres = await LoginProfile({ address: data });
        console.log("userres", userres)
        console.log("userres", userres.data.token.accessToken)
        let obj = {
          data: userres.data.token.accessToken
        }
        console.log("obj", obj)
        dispatch(Auth(obj));
        return signature;
      }
      catch (error) {
        console.log("error", error)
        toast.error(error && error.message, {
          position: "top-right",
          autoClose: 2000,
        });
      }

    }
  }, [account, library, data])
  return { userSign: sign }
}

export default Signature
let initState = {
  legionPro: "0x1c89f9e644aaa08dfb762bce95061ecfc74c37df",
  legionUnique: "0x1c89f9e644aaa08dfb762bce95061ecfc74c37df",
  legionP: "0x1c89f9e644aaa08dfb762bce95061ecfc74c37df",
  tokenauth:"abc def aaa",
};
export const UserReducer = (state = initState, action) => {
  const { type, payload } = action; //object destructring
  switch (type) {
    case "LEGIONPRO":
      return {
        ...state,
        legionPro: payload
      };
    case "TOKEN":
      return {
        ...state,
        tokenauth: payload
      }
    // case "COINBASE":
    //   return {
    //     ...state,
    //     coinbase:payload,
    //   };
    // case "MYETHER":
    //   return {
    //     ...state,
    //     myether: payload,
    // //   };
    //   case "WALLETCONNECT":
    //   return {
    //     ...state,
    //     allset:{
    //       metamask: false,
    //       coinbase:false,
    //       myether:false,
    //       walletconnect:payload,            
    //       }
    //   };
    default:
      return state;
  }
};

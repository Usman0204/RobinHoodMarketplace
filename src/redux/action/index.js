
// export const LegionPro = () => {
//   return {
//     type: "PRO",
//     payload
//   }
// }

// export const LegionUnique = () => {
//   return {
//     type: "UNIQUE",
//     payload
//   }
// }


// export const LegionFresh = () => {
//   return 
// }

export const Auth = (obj) => {
  console.log("obj", obj)
  return {
    type: "TOKEN",
    payload: obj
  }
}


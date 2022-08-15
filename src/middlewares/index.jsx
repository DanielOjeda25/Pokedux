export const logger = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

/* export const featuring = (store) => (next) => (actionInfo) => {
  //Aqui desplegamos todo el objeto donde estan los pokemon
  const featured = [{ name: 'eddie' }, ...actionInfo.action.payload]
  //esto actualizara nuestro reducer
  const updatedActionInfo = {
    ...actionInfo,
    action: { ...actionInfo.action, payload: featured },
  }
  next(updatedActionInfo)
}
 */
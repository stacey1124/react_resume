import { INCREMENT, DECREMENT, ADD_ITEM, INPUT_CHANGE, DEL_ITEM } from '../../Store/actionTypes'
const defaultState = {
  value: 0,
  listData: [
    "列表项目1",
    "列表项目2",
    "列表项目3",
    "列表项目4",
    "列表项目5",
    "列表项目6",
    "列表项目7"
  ]
}
export default (state = defaultState, action) => {
  console.log(state, "22",  action)
  // let newState = JSON.parse(JSON.stringify(state))
  // switch(action.type) {
  //   case 'INCREMENT':
  //     newState.value = action.value + 1
  //     return newState
  //   case 'DECREMENT':
  //     newState.value = action.value - 1
  //     return newState
  //   default:
  //     return state
  // }
  if(action.type === INCREMENT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.value = action.value + 1
    return newState
  }
  if(action.type === DECREMENT) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.value = action.value - 1
    return newState
  }
  if(action.type === INPUT_CHANGE) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value    
    return newState
  }
  if(action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    // console.log("11")
    newState.listData.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === DEL_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))  
    console.log('newState.index::', action.index);
    console.log('newState.listData::', newState.listData);
    newState.listData.splice(action.index, 1)
    return newState
  }
  return state
}

// const ADD_CHAT = 'ADD_CHAT'
// const CHANGE_STATUS = 'CHANGE_STATUS'
// const CHANGE_USERNAME = 'CHANGE_USERNAME'
// const chatReducer = (state = defaultState, action={}) => {
//   const { type, payload } = action
//   switch (type) {
//     case ADD_CHAT:
//       return Object.assign({}, state, {
//         chatlog: state.chatlog.concat(payload)
//       })
//     case CHANGE_STATUS:
//       return Object.assign({}, state, {
//         statusMessage: payload
//       })
//     case CHANGE_USERNAME:
//       return Object.assign({}, state, {
//         userName: payload
//       });
//     default: return state
//   }
// }
import {  INCREMENT, DECREMENT, ADD_ITEM, INPUT_CHANGE, DEL_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes'

export const handleIncrement_action = () => {
  return {
    type: INCREMENT
  }
}
export const handleDecrement_action = () => {
  return {
    type: DECREMENT
  }
}
export const handleChange_action = (value) => {
  return {type: INPUT_CHANGE, value}
}
export const handleAddItem_action = () => {
  return {type: ADD_ITEM}
}
export const delItem_action = (index) => {
  return {
    type: DEL_ITEM,
    index
  }
}
export const getList_action = (data) => {
  console.log("data12:", data)
  return {type: GET_LIST, data}
}
// export const getMyListAction = () => {
// }
export const getMyListAction = () => ({
  type: GET_MY_LIST
})
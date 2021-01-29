import React, { Component, Fragment } from "react"
import DashBoardUI from './dashBordUI'
import store from '../Store'
import { INCREMENT, DECREMENT, ADD_ITEM, INPUT_CHANGE, DEL_ITEM } from '../Store/actionTypes'
import { 
  handleIncrement_action, 
  handleDecrement_action, 
  handleChange_action,
  handleAddItem_action,
  delItem_action
} from '../Store/actionCreators'

export default class DashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.storeChange)//如果不订阅，值就不能再界面更新的显示
    // this.selectRef = item => this.inputRef = item
  }

  storeChange = () => {
    console.log(store.getState())
    this.setState(store.getState())
    // this.setState(store.getState())
  }

  handleClick = () => {
    // const { count } = this.state
    // this.setState({
    //   count: count + 1
    // })
    // const action = {
    //   type: INCREMENT
    // }
    const action = handleIncrement_action()
    console.log('action::', action);
    
    store.dispatch(action)
  }
  handleIncrement = () => {
    const action = handleIncrement_action()
    store.dispatch(action)
  }
  handleDecrement = () => {
    const action = handleDecrement_action()
    store.dispatch(action)
  }
  handleChange = (e) => {
    const action = handleChange_action(e.target.value)
    store.dispatch(action)
    console.log(e.target.value)
  }
  handleAddItem = () => {
    const action = handleAddItem_action()
    store.dispatch(action) 
  }
  delItem = (index) => {
    console.log('index::', index);
    
    const action = delItem_action(index)
    store.dispatch(action)
  }

  render() {
    console.log('store.getState()::', store.getState());
    // const store = createStore(fn)
    // console.log('store::', store);
    
    // const state = store.getState()
    // console.log('state::', state);

    // const action1 = {type: 'ADD_CHAT', payload: 0};
    // const action2 = {type: 'CHANGE_STATUS', payload: 1};
    // const action3 = {type: 'CHANGE_USERNAME', payload: 2};

    // //reducer((pre, cur, index, arr) => {}, 0)
    // // const total = actions.reduce(reducer, 0)
    // const state1 = reducer(action1, 0)
    // console.log('state1::', state1);
    // const store = createStore(reducer)
    // store.subscribe(listener)
    // const { count } = this.state
    const { value, listData, inputValue } = this.state
    return (
      <Fragment>
        <DashBoardUI 
          value={value}
          inputValue={inputValue}
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          listData={listData}
          handleChange={this.handleChange}
          handleAddItem={this.handleAddItem}
          delItem={this.delItem}
        />
      </Fragment>
    )
  }
}


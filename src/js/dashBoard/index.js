import React, { Component, Fragment } from "react"
import { Select, Input, Button, List } from 'antd'
import { createStore } from 'redux'
import reducer from './reducer'
import store from '../Store'
import { INCREMENT, DECREMENT, ADD_ITEM, INPUT_CHANGE, DEL_ITEM } from '../Store/actionTypes'

const { Option } = Select
export default class DashBoard extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.storeChange)//如果不订阅，值就不能再界面更新的显示
    // this.selectRef = item => this.inputRef = item
  }

  handleClick = () => {
    // const { count } = this.state
    // this.setState({
    //   count: count + 1
    // })
    const action = {
      type: INCREMENT,
      value: 0
    }
    store.dispatch(action)

    
  }
  handleIncrement = () => {
    const action = {
      type: INCREMENT,
      value: this.state.value
    }
    store.dispatch(action)
  }
  handleDecrement = () => {
    const action = {
      type: DECREMENT,
      value: this.state.value
    }
    store.dispatch(action)
  }
  handleAddItem = () => {
    const action = {type: ADD_ITEM}
    store.dispatch(action) 
  }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  storeChange = () => {
    console.log(store.getState())
    this.setState(store.getState())
    // this.setState(store.getState())
  }
  onSearch = (e) => {
    // console.log(e)
  }
  handleChange = (e) => {
    const action = {type: INPUT_CHANGE, value: e.target.value}
    store.dispatch(action)
    console.log(e.target.value)
  }
  delItem = (index) => {
    const action = {
      type: DEL_ITEM,
      index: index
    }
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
    
    return (
      <Fragment>
        <div onClick={this.handleClick}
          style={{width: "50px", height: "50px", backgroundColor: "pink", marginLeft: "50px", display: "flex", justifyContent: "center"}}
        >
          {/* {store.getState().value} */}
          {this.state.value}
        </div>
        <button onClick={this.handleIncrement}>点击+1</button>
        <button onClick={this.handleDecrement}>点击-1</button>
        <Select
          showSearch
          style={{width: 200, display: 'block', marginLeft: 30}}
          onSearch={this.onSearch}
          // onChange={this.handleChange}
          filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          
        >
          {this.state.listData.map((item) => <Option>{item}</Option>)}
        </Select>
        <Input placeholder="请输入新增的项目" style={{width: 200, marginLeft: 30, marginRight: 5}}
          onChange={this.handleChange}
          value={this.state.inputValue}
          ref={this.selectRef}
        ></Input>
        <Button type="primary" onClick={this.handleAddItem} style={{backgroundColor: 'blue'}}>点击增加item</Button>
        <List
          style={{width: 200, border: '1px solid #ccc', marginLeft: 200}}
          dataSource={this.state.listData}
          renderItem={(item, index) => (
            <List.Item onClick={this.delItem.bind(this, index)} >{item}</List.Item>
            // <List.Item onClick={this.delItem}>{item}</List.Item>
          )}
        >
        </List>
      </Fragment>
    )
  }
}


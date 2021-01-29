import React, { Fragment } from 'react'
import { Button } from 'antd'
import store from '../../../Store'
import './src/css/index.css'


// 在此页面使用reducer中的state
export default class Email extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    
  }
  handleClick = () => {
    this.setState({
      visible: true
    })
  }
  handleTouchStart = (e) => {
    console.log('scrollTop::', e.scrollTop);
    
    console.log('e.touches[0].clientY::', e.touches[0].clientY);
    
  }
  render() {
    const { visible } = this.state
    return (
      <Fragment>
        <h1>防抖和节流{store.getState()}</h1>
        <Button onClick={this.handleClick}>点击展示</Button>
        <div className="box">

        </div>
      </Fragment>
    )
  }
}
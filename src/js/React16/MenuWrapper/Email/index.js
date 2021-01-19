import React, { Fragment } from 'react'
import { Button } from 'antd'
import './src/css/index.css'

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
        <h1>防抖和节流</h1>
        <Button onClick={this.handleClick}>点击展示</Button>
        <div className="box">

        </div>
      </Fragment>
    )
  }
}
import React, { Fragment } from 'react'
import { Button } from 'antd'

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
  render() {
    const { visible } = this.state
    return (
      <Fragment>
        <h1>邮件</h1>
        <Button onClick={this.handleClick}></Button>
        {visible ? 
          (<div className="">
            
          </div>) 
        : null}
      </Fragment>
    )
  }
}
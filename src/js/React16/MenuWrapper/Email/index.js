import React, { Fragment } from 'react'
import Popup from '../../../components/popup'
import { Button } from 'antd'

export default class Email extends React.Component {
  
  render() {
    return (
      <Fragment>
        <Button onClick={this.deleteResume}>删除简历</Button>
        <Popup></Popup>
      </Fragment>
    )
  }
}
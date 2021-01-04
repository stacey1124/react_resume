import React from 'react'

import { Modal } from 'antd'

export default class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: !!this.props.visible
    }
  }
  onCancel = e => {
    this.hide();
  }
  hide = e => {
    this.setState({
      visible: false
    })
  }
  show = e => {
    this.setState({
      visible: true
    })
  }
  render() {
    return (
      <Modal
        visible={this.state.visible}
        onCancel={this.onCancel}
      >

      </Modal>
    )
  }
}
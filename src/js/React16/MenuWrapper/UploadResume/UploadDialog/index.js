import React, { Component } from 'react'
import LazyDialog from '../LazyDialog'
// import './index.scss'

import { Modal, Button } from 'antd'
import MutipleForm from './src/mutiple'
import SingleForm from './src/single'
// const MutipleForm = require('./src/mutiple')
// const SingleForm = require('./src/single')
const ButtonGroup = Button.Group
const btnMap = [
  {
    label: "多选",
    type: "left",
    value: 1
  },
  {
    label: "单选",
    type: "right",
    value: 2
  }
]
const Map = {
  1: MutipleForm,
  2: SingleForm
}
// class MutipleForm extends Component {
//   return (
//   )

// }
// class SingleForm extends Component {
// }
// @LazyDialog
export default class UploadDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 1
    }
  }
  handleCancel = () => {
    this.props.close();
  }
  renderDialogContent = () => {
    const { selected } = this.state
    const Component = Map[selected] || null
    return (
      <div>
        <ButtonGroup>
          {
            btnMap.map((item, index) => {
              console.log("index::: ", index);
              console.log("selected::: ", selected);
              console.log("...selected::: ", {...selected});
              return (
                <Button 
                  className={`form-btn-${item.type}`}
                  { ...selected === index + 1 ? {type: 'primary'} : ''}
                  onClick={() =>{
                    console.log("item.value:", item.value)
                    this.setState({
                      selected: item.value
                    }
                    // ,
                    //   () => {
                    //     console.log("this.state.selected::: ", this.state.selected);
                    //   }
                      )
                  }}
                >
                  {item.label}
                </Button>
              )
            })
          }
        </ButtonGroup>
        <div>
          <Component />
        </div>
      </div>
    )
  }
  render() {
    const { children, visible } = this.props
    return (
      <Modal
        title="上传简历"
        visible={visible}
        maskClosable={true}
        onCancel={this.handleCancel}
      >
        {this.renderDialogContent()}
      </Modal>
    )
  }
}
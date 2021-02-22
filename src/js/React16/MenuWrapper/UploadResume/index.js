import React, { Fragment } from 'react'
import UploadDialog from './UploadDialog'
import { Button } from 'antd'
// import './index.css'

export default class UploadResume extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  handleUpload = () => {
    const { visible } = this.state
    this.setState({
      visible: !visible
    })
  }
  handleCancel = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const { visible } = this.state
    return (
      <Fragment>
        <UploadDialog 
          visible={visible}
          close={this.handleCancel}
        >
        </UploadDialog>
        <Button
          className={'upload-resume-btn'}
          size={'large'} 
          shape={'round'} 
          type={'secondary'}
          onClick={this.handleUpload}
          >
          上传简历
        </Button>
      </Fragment>
    )
  }
}
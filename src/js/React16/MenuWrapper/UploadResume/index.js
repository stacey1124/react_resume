import React from 'react'

import { Button } from 'antd'
import './index.scss'

export default class UploadResume extends React.Component {
  handleUpload = () => {

  }
  render() {
    return (
      <Button
        className={'upload-resume-btn'}
        size={'large'} 
        shape={'round'} 
        type={'secondary'}
        onClick={this.handleUpload}
        >
        上传简历
      </Button>
    )
  }
}
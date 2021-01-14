import React, { Component } from 'react'
import { Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import UploadIcon from './img/icon-upload.jpg'
const { Dragger } = Upload
export default class MutipleForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }
    }
  }
  onChange = (val) => {
    console.log("change_val::", val)
    // console.log('val.fileList::', val.fileList);
    
    this.props.fileUploadChange(val)
    this.setState({
      fileList: val && val.fileList
      // fileList: val
    })
  }
  render() {
    const { fileList } = this.state
    console.log('fileList::', fileList);
    console.log("fileList-type", Object.prototype.toString.call(fileList))
    // fileList.map(item => 
    //   console.log("item:", item)
    // )
    return (
      // <Dragger
      <Upload
        name="photo"
        data={{fileName: "upload-image.jpg"}}//上传所需要的额外参数
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // fileList={fileList}  //此处这样使用fileList会报错：items.map is not a function
        onChange={this.onChange}
      >
        <img src={UploadIcon} style={{width: "50px", height: "50px", marginTop: "10px"}}></img>
        <p className="ant-upload-text">点击上传文件</p>
      {/* </Dragger> */}
      </Upload>
    )
  }
}

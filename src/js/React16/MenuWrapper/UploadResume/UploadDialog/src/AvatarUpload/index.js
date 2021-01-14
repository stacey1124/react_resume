import React, { Component, Fragment } from 'react'
import { Upload } from 'antd'
import ImgCrop from 'antd-img-crop';
import img from '../MutipleUpload/img/icon-upload.jpg'
export default class Avatar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
      ],
      src: ""
    }
  }
  onChange = ({fileList: newFileList}) => {
    console.log('newFileList::', newFileList);
    this.setState({
      listFile: newFileList
    })
    
  }
  // onPreview = () => {
  //   console.log("preview:")
  // }
  onPreview = async file => {
    const { fileList } = this.state
    console.log('file_outer::', file);
    // console.log('fileList_async::', fileList);
    const reader = new FileReader();
    // console.log('::', reader.readAsDataURL(fileList));
    let src = file.url
    if (!src) {
      src = await new Promise(resolve => {
        //FileReader异步文件读取机制
        console.log("file::", file)
        // readAsDataURL读取图像文件并以数据URI形式保存在result中
        reader.readAsDataURL(file.originFileObj)
        // onload是否已经读完整个文件
        reader.onload = () => resolve(reader.result)
      })
    }
    console.log("src:", src)
    const image = new Image();
    image.src = src;
    const imageWindow = window.open(src)
    window.open()
    this.setState({
      src: src
    })
  }
  render() {
    const { fileList, src } = this.state
    console.log('fileList::', fileList);
    
    return(
      <Fragment>
      <ImgCrop >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          // fileList={fileList}
          onChange={this.onChange}
          onPreview={this.onPreview}
        >
          {fileList.length < 5 && '+ upload'}
        </Upload>
      </ImgCrop>
      {
        src && (
          <div>
            <img src={src}></img>
          </div>
        )
      }
      </Fragment>
    )
  }
}
import React, { Component, Fragment } from 'react'
import PositionPickSelect from './PositionPickSelect'
import MutipleUpload from './MutipleUpload'
import CropperWrapper from './CropperWrapper'
import Avatar from './AvatarUpload'
import { Popover, 
         Input, 
         Form, 
         Button,
        } from 'antd'

const FormItem = Form.Item
export default class MutipleForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positionVal: ""
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { form } = this.props
    console.log('this.props.form::', this.props.form);
    form.validateFieldsAndScroll((errs, values) => {
      if(!errs) {
        console.log("values:", values)
      }
    })
    
  }
  handleChange = (val) => {//子组件Select中的下拉框内容
    this.setState({
      positionVal: val
    })
  }
  handleUploadChange = (val) => {
    console.log('file_val::', val);
    
  }
  render() {
    const { positionVal } = this.state 
    return (
      <Fragment>
        <Form onSubmit={this.handleSubmit} >
          {/* 1、搜索下拉框 */}
          <FormItem
            name="position"
            rules={[
              {
                required: true,
                message: "请输入职位名称"
              }
            ]}
          > 
            <PositionPickSelect selectChange={this.handleChange} />
          </FormItem>
          {/* 2、多个上传文件 */}
          <FormItem
            name="file"
            rules={[
              {
                required: true,
                message: "请上传简历文件"
              }
          ]}
          >
            <MutipleUpload fileUploadChange={this.handleUploadChange} />
          </FormItem>
          {/* 头像裁剪上传 */}
          <FormItem
            name="avator"
            rules={[
              {
                require: true,
                message: "请上传头像"
              }
            ]}
          >
            <Avatar></Avatar>
          </FormItem>
          {/* 文件裁剪插件cropperjs */}
          <FormItem
            name="cropper"
            rules={[
              {
                require: true,
                message: "上传裁剪头像"
              }
            ]}
          >
            <CropperWrapper></CropperWrapper>
          </FormItem>
          <FormItem>
            <Button htmlType="submit" >
              提交
            </Button>
          </FormItem>
        </Form>
      </Fragment>
      
    )
  }
}

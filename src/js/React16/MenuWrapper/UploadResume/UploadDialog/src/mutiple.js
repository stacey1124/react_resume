import React, { Component, Fragment } from 'react'
import PositionPickSelect from './PositionPickSelect'
import MutipleUpload from './MutipleUpload'
import { Popover, Input, Form, Button } from 'antd'

const FormItem = Form.Item
class MutipleForm extends Component {
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
    const { getFieldDecorator } = this.props.form
    return (
      <Fragment>
        <Form
          onSubmit={this.handleSubmit}
        >
          {/* 1、搜索下拉框 */}
          <FormItem
          > 
          {/* 使用getFieldDecorator之前必须用Form.create(Form)将表单组件包裹起来 */}
            {getFieldDecorator("position", {
              initialValue: positionVal,
              rules: [{
                required: true,
                message: "请输入职位名称"
              }]
            })(
              <PositionPickSelect
                selectChange={this.handleChange}
              >
              </PositionPickSelect>
            )}
          </FormItem>
          {/* 2、多个上传文件 */}
          <FormItem>
            {getFieldDecorator("file", {
              initialValues: "123",
              rules: [{
                required: true,
                message: "请上传简历文件"
              }]
            })(
              <MutipleUpload
                fileUploadChange={this.handleUploadChange}
              >

              </MutipleUpload>
            )}

          </FormItem>
          <FormItem>
            <Button
              htmlType="submit"
            >
              提交
            </Button>
          </FormItem>
        </Form>

      </Fragment>
      
    )
  }
}
export default MutipleForm = Form.create({})(MutipleForm)
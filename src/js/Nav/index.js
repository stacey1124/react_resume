import React, { Component } from 'react'

import { 
  Form, 
  Input, 
  Select, 
  Switch,
  Tabs,
  Button,
  Menu,
  Dropdown,
  Radio
} from 'antd'

const { SubMenu } = Menu; 

class FormDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      rank_info: 10
    }
  }

  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  }

  render() {
    console.log(`this.props.children:${this.props.children}`);
    const { form } = this.props
    const { getFieldDecorator, getFieldValue, resetFields } = form
    const { rank_info } = this.state
    const FormItem = Form.Item,
    Option = Select.Option,
    TabPane = Tabs.TabPane;

    // getFieldValue
    return (
      <div className="form-test">
        <Form>
          <FormItem className="username">
            {getFieldDecorator('username', {
              initialValues: "",
              rules: [
                {
                  required: true,
                  message: "请输入用户名"
                },
                {
                  type: "email",
                  message: "用户名格式必须为邮箱"
                }
              ]
            })(
              <Input 
                type="text"
                placeholder="请输入用户名"
                // onChange={e => {
                //   e.target.value
                // }}
              />
            )}
          </FormItem>
          <FormItem className="rank-level">
            {getFieldDecorator('rank_info', {
              initialValue: rank_info,
              rules: [{
                required: true,
                message: "等级信息为必填"
              }]
            })(
              <Select
                placeholder="请选择等级信息"
                className="rank_info_select"
                onChange={(val) => {
                  this.setState({
                    rank_info: val
                  })
                }}
              >
                <Option value={10}>10</Option>
                <Option value={20}>20</Option>
                <Option value={30}>30</Option>
                <Option value={40}>40</Option>
              </Select>
            )}
          </FormItem>
          <FormItem>
            <Switch onChange={this.onChange}></Switch>
          </FormItem>
          {/* <FormItem>
            <Tabs>
              <TabPane>1</TabPane>
              <TabPane>2</TabPane>
            </Tabs>
          </FormItem> */}
          <Button
            onClick={(e) => {
              e.preventDefault();
              form.validateFieldsAndScroll((errs, values) => {
                console.log(errs, values);
                console.log(getFieldValue("rank_info"));
                // setFieldValue()
                
              })
            }}
          >提交</Button>
        </Form>

        <div className="drop-parent">
          父节点
        </div>

        <Dropdown 
          getPopupContainer={() => {
            return document.querySelector(".drop-parent")
          }}
          overlay={
            <Menu>
              <Menu.Item>
                <a target="_blank" href="www.baidu.com"> 1st menu item </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" href="www.baidu.com"> 2st menu item </a>
              </Menu.Item>
            </Menu>
          }
        >
          <a >Hover me</a>
        </Dropdown>

          <Radio.Group defaultValue="1" buttonStyle="solid">
            <Radio.Button value="1">test1</Radio.Button>
            <Radio.Button value="2">test2</Radio.Button>
            <Radio.Button value="3">test3</Radio.Button>
          </Radio.Group>

          {this.props.children}
      </div>
    )
  }
}

export default FormDialog = Form.create({})(FormDialog);


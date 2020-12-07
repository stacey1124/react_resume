import React, { Component } from 'react'
// import Form from './Form'
import { 
  Form, 
  Input, 
  Select, 
  Switch,
  Tabs,
  Button
} from 'antd'

class FormDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      rank_info: 10
    }
  }

  render() {
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
            <Switch></Switch>
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
      </div>
    )
  }
}

export default FormDialog = Form.create({})(FormDialog);


import React, { Component, Fragment } from 'react'

import { 
  Form, 
  Input, 
  Select, 
  Switch,
  Tabs,
  Button,
  Menu,
  Dropdown,
  Radio,
  Modal,
  AutoComplete,
  Checkbox
} from 'antd';

import { FileOutlined, FileAddOutlined } from '@ant-design/icons';

const { SubMenu } = Menu; 
//多选
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["blue", "green", "orange"];
const checkList = ["blue", "green", "yellow"]
class FormDialog extends Component {
  constructor(props){
    super(props)
    this.state = {
      // rank_info: 10
      isModalVisible: false,
      isModalVisible_add: false
    }
  }

  // onChange = (checked) => {
  //   console.log(`switch to ${checked}`);
  // }

  showModal = () => {
    this.setState({
      isModalVisible: true
    })
  }

  
  handleOk = () => {
    this.setState({
      isModalVisible: false
    })
  }
  
  handleOk_add = () => {
    this.setState({
      isModalVisible_add: false
    })
  }

  handleCancel = () => {
    this.setState({
      isModalVisible: false
    })
  }

  handleCancel_add = () => {
    this.setState({
      isModalVisible_add: false
    })
  }

  addFile = () => {
    // console.log("22");
    //弹窗
    this.setState({
      isModalVisible_add: true
    })
  }

  onCheckAllChange = (values) => {
    console.log(values)
  }

  onChange = () => {
    
  }
  
  render() {
    // console.log(`this.props.children:${this.props.children}`);
    // const { form } = this.props
    // const { getFieldDecorator, getFieldValue, resetFields } = form
    // const { rank_info } = this.state
    // const FormItem = Form.Item,
    // Option = Select.Option,
    // TabPane = Tabs.TabPane;

    // getFieldValue
    const { Search } = Input;
    const { Option } = Select;
    const archives = [
      "文件1",
      "文件2"
    ]
    let {
      isModalVisible,
      isModalVisible_add
    } = this.state;
    return (
      <Fragment>
        <div>
          <Button type="primary" onClick={this.showModal}>
          Open Modal
          </Button>
          <Modal
            title="复制到"
            visible={isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <span>
              <Search placeholder="请输入文件名" loading />
            </span>
            <span style={{"cursor": "pointer"}} onClick={this.addFile}>
              <FileAddOutlined 
                style={{
                  fontSize: 16,
                  color: '#1890ff'
                }}
              />
              新建文件

            </span>
            
            <p><FileOutlined />文件1...</p>
            <p><FileOutlined />文件2...</p>
            <p><FileOutlined />文件3...</p>
          </Modal>

          <Modal
                title="新建文件"
                visible={isModalVisible_add}
                onOk={this.handleOk_add}
                onCancel={this.handleCancel_add} 
              >
                <label>文件名</label>
                <Input></Input>
                <label>选择文件</label>
                <Input.Group compact>
                  {/* <Select defaultValue="Sign Up" style={{ width: '30%' }}>
                    <Option value="Sign Up">Sign Up</Option>
                    <Option value="Sign In">Sign In</Option>
                  </Select> */}
                  <AutoComplete
                    style={{ width: '70%' }}
                    placeholder="Email"
                    options={[{ value: 'text 1' }, { value: 'text 2' }]}
                  />
                </Input.Group>
              </Modal>
        </div>
                      
        {/* 多选 */}
        <Checkbox
          onChange={this.onCheckAllChange}
        >
          全选
        </Checkbox>
        <CheckboxGroup options={plainOptions} value={checkList} onChange={this.onChange}>

        </CheckboxGroup>
      </Fragment>
    )
  }
}

export default FormDialog = Form.create({})(FormDialog);


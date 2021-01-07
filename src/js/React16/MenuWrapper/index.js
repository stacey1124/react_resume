import React, { Fragment } from 'react'
import { find } from 'lodash'
import Email from './Email'
import Address from './Address'
import Remarks from './Remarks'
import UploadResume from './UploadResume'
import DropSelect from './DropSelect'
import Context from './Context'

import { Menu } from 'antd'

const MenuItem = Menu.Item
const Tabs = [
  {
    "text": "邮件",
    "tab": "mail",
    "component": Email
  },
  {
    "text": "地址",
    "tab": "address",
    "component": Address
  },
  {
    "text": "备注",
    "tab": "remarks",
    "component": Remarks
  },
  {
    "text": "上传简历",
    "tab": "uploadResume",
    "component": UploadResume
  },
  {
    "text": "选择下拉框",
    "tab": "select",
    "component": DropSelect
  },
  {
    "text": "Provider-Consumer",
    "tab": "context",
    "component": Context
  }
]

const renderContent = (activePanel, tabs, props, handleChange) => {
  let activeTab = find(tabs, {tab: activePanel})
  let WrapperComponent = activeTab.component
  return(
    <WrapperComponent
      panelName={activeTab.tab}
      handleChange={handleChange}
    >

    </WrapperComponent>
  )
}

export default class Wrapper extends React.Component {
  static defaultProps = {
    tabs: Tabs,
    render: renderContent
  }
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const { props } = this
    const { 
      onPanelChange, 
      activePanel, 
      tabs, 
      render,
      handleChange 
    } = props
    console.log("tabs:", tabs)
    return (
      <Fragment>
        <Menu
          onClick={onPanelChange}
          selectedKeys={[activePanel]}
          mode="horizontal"
        >
          {tabs.map((item) => {
            return (
              <MenuItem key={item.tab}>
                {item.text}
              </MenuItem>
            )
          })}          
        </Menu>
        {render(activePanel, tabs, props, handleChange)}
      </Fragment>
    )
  }
}
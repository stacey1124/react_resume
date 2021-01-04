import React, { Fragment } from 'react'
import { find } from 'lodash'
import Email from './Email'
import Address from './Address'
import Remarks from './Remarks'
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
  }
]

const renderContent = (activePanel, tabs, props) => {
  console.log("props::: ", props);
  console.log("activePanel:", activePanel)
  let activeTab = find(tabs, {tab: activePanel})
  console.log("activeTab", activeTab)
  let WrapperComponent = activeTab.component
  return(
    <WrapperComponent
      panelName={activeTab.tab}
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
      render 
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
        {render(activePanel, tabs, props)}
      </Fragment>
    )
  }
}
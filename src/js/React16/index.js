import React, { Fragment } from 'react';
import Counter from './Test'
import Temperature from './Temperature'
import HookTest from './Hook'
import Dialog from './Dialog'
import Wrapper from './MenuWrapper'
import MyPromise from './Promise'
import { Button, Popover, Modal, Menu } from 'antd'
import { isNumber } from 'lodash'
import { resolveOnChange } from 'antd/lib/input/Input';

const MenuItem = Menu.Item
export default class React16 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      increment: 2,
      activePanel: 'mail'
    }
    this.input = React.createRef()

  }
  onPanelChange = ({item, key: panel, keyPath}) => {
    console.log("panel", panel)
    this.setState({
      activePanel: panel
    })
  }
  handleChange = (val) => {
    console.log("val::: ", val);
  }
  // static contextType = Context
  render() {
    // 调用实现的promise
    new MyPromise((resolve, reject) => {
      setTimeout(() => {
        console.log(111)
        resolve(1)
      }, 2000)
    }).then((val) => {
      console.log("val::", val)
    })
    const __html = 'First Second'
    const { increment } =this.state;
    const initialCount = 1
    const content = (
      <div>
        <span>标题1</span>
        <span>标题2</span>
      </div>
    )

    const { activePanel } = this.state
    return (
      <Fragment>
        <Counter initialCount={initialCount}/>
        <Temperature />
        <div ref={this.input}>123</div>
        <HookTest />
        <Popover 
          title="详细信息"
          content={content}
        >
          <Button>点击弹出</Button>
          <a>点击跳转</a>
        </Popover>
        <Button
          onClick={() => {this.dialog.show()}}
        >点击弹框Modal</Button>
        <Dialog
          title="标题"
          ref={(e) => {
            this.dialog = e
          }}
        >
        </Dialog>
        <Wrapper
          onPanelChange={this.onPanelChange}
          activePanel={activePanel}
          handleChange={this.handleChange}
        >
        </Wrapper>
      </Fragment>
    )
  }
}
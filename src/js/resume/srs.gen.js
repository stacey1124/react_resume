import React from 'react';
import * as BB from './btn_batch';
export default class Gen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      childMsg: '子组件要传给父组件的内容',
      tabid2: 'tabid2'
    }
  }

  getProcedureVariable = () => {
    const list = ['测试数据1', '测试数据2', '测试数据3'];
    let pagination = "pagination";
    const ret = {
      list,
      pagination
    }
    return ret;
  }

  handleParentToChild = () => {
    this.props.parentMethod('111');
  }

  componentDidMount() {
  }

  render() {
    let tabid = 'tabid1',
    tab_list = ['b1', 'b2', 'b3'],
    projects_id = 2;
    
    const { tabid2 } = this.state;
    const { data, scroll, x, y } = this.props;
    console.log("child:", scroll, x, y);
    console.log("this", this);
    
    return (
      <div>
        <BB.BtnBatch2 tabid2={tabid2} />
        {BB.BtnBatch.call(this, { tabid, tab_list })}
        {/* 方法二: 也可以实现传递参数 */}
        {BB.BtnBatch.call(null, { tabid, tab_list })}
        {/* 使用下面这种方法调用函数tabid会显示undefined */}
        {/* {BB.BtnBatch.call( tabid, tab_list )} */}
        <div className="text1"></div>
        <div className="gen-data" onClick={this.handleParentToChild}>{data}</div>
      </div>
    )
  }
}
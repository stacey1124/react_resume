import React from 'react';
import Gen from './srs.gen';
export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gen_data: '初始数据',
      childMsg: ''
    }
  }
  getChildMsg = (msg) => {
    this.setState({
      childMsg: msg
    })
  }
  render () {
    const { gen_data, childMsg } = this.state;
    // let { list, pagination } = Gen.getProcedureVariable.call(this);
    // console.log(list);
    return (
      <div>
        resume
        <div>子组件要传过来的值：{childMsg}</div>
        <Gen data={gen_data} parentMethod={this.getChildMsg} />
      </div>
    )
  }
}
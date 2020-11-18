import React from 'react';
export default class Gen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      childMsg: '子组件要传给父组件的内容'
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
    const { data } = this.props;
    let { list } = this.getProcedureVariable();
    return (
      <div className="gen-data" onClick={this.handleParentToChild}>{data}</div>
    )
  }
}
import React from 'react';
import Gen from './srs.gen';
export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gen_data: '初始数据',
      childMsg: '',
      scroll: {
        x: 20,
        y: 20
      }
    }
  }
  componentDidMount() {
    console.log(111)
    fetch("http://recruitmentai.hbjy88.com/position/search?channel=2&brand=28&project_id=22")
    .then(res => res.json())
    .then(data => {
      console.log("data:",data)
    })
  }
  getChildMsg = (msg) => {
    this.setState({
      childMsg: msg
    })
  }

  handleClick = () => {
    
  }
  render () {
    const { gen_data, childMsg, scroll } = this.state;
    // let { list, pagination } = Gen.getProcedureVariable.call(this);
    // console.log(list);
    return (
      <div>
        resume
        <div>子组件要传过来的值：{childMsg}</div>
        <Gen data={gen_data} parentMethod={this.getChildMsg} {...scroll} />
        <button onClick={() => {alert(gen_data)}}>BTN</button>
        <button onClick={this.handleClick}>GET</button>
      </div>
    )
  }
}
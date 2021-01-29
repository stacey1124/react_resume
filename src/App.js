import { Component } from 'react';
import { Link } from 'react-router'
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       首页
//       <Link to="resume">简历页</Link>
//       <Link to="nav">测试页</Link>
//       {this.props.children}
//     </div>
//   );
// }

// export default App;
export default class App extends Component {
  render() {
    console.log("props", this.props.children);
    return (
      <div className="App">
        <Link to="/">首页(Redux)</Link>
        <Link to="/resume">简历</Link>
        <Link to="/nav">antd组件</Link>
        <Link to="/nav/message/2">视频</Link>
        <Link to="/react16">react16</Link>
        {this.props.children}
      </div>
    );
  }
}


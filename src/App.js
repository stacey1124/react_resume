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
    return (
      <div className="App">
        首页
        <Link to="resume">简历页</Link>
        <Link to="nav">测试页</Link>
        {this.props.children}
      </div>
    );
  }
}


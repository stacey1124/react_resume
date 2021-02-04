import { Component } from 'react';
import { Link } from 'react-router'
import './App.css';
import 'antd/dist/antd.css';//antd样式 不生效问题
import logo from './assets/logo.svg'
import classnames from 'classnames'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isIndexTab: true
    }
  }
  isIndexTab = () => {
    this.setState({
      isIndexTab: true
    })
  }
  isOtherTab = () => {
    this.setState({
      isIndexTab: false
    })
  }
  render() {
    let { isIndexTab } = this.state
    // 刷新页面时color丢失问题
    const url = window.location.href
    if (url && (url.indexOf("school")!==-1 || url.indexOf("society")!==-1)) {
      isIndexTab = false
    }
    return (
      <div className="App">
        <div className={classnames("header", {"header-bottom": !isIndexTab})}>
          <a className="header-logo">
            <img src={logo} alt="公司logo" />
          </a>
          <ul className="nav-list">
            <li className={classnames("list-item", {"list-item-blue": !isIndexTab})} onClick={this.isIndexTab}><Link to="/">首页</Link></li>
            <li className={classnames("list-item", {"list-item-blue": !isIndexTab})} onClick={this.isOtherTab}><Link to="/society">社会招聘</Link></li>
            <li className={classnames("list-item", {"list-item-blue": !isIndexTab})} onClick={this.isOtherTab}><Link to="/school">校园招聘</Link></li>
          </ul>
          <div className="login-wrap"><div className="login-regist">登录 | 注册</div></div>
        </div>

        {this.props.children}
      </div>
    );
  }
}


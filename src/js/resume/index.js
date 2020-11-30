import React, { Fragment } from 'react';
import { Button, Modal } from "antd";
import BottomModal from './bottom-modal'
import Popup from '../common/popup'
import Gen from './srs.gen';
import { Router, Route, hashHistory } from 'react-router';

import classnames from 'classnames';

import '../../css/bottom-modal.css'
import '../../css/resume.css'
import 'antd/dist/antd.css';
export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isDelPageVis: false,
      isDetailPageVis: false,
      height: 0
    }
  }
  componentDidMount() {

  }
  getChildMsg = (msg) => {
    this.setState({
      childMsg: msg
    })
  }

  handleClick = () => {
    fetch("/api/position/detail?format=json&brand=28&id=113")
    .then(res => res.json())
    .then(data => {
      console.log("data:",data);
    })
  }

  showDeletePage = (e) => {
    //点击时出现浮层Modal
    this.setState({
      isDelPageVis: true
    })
  }

  deletePageVisible = (visible) => {
    this.setState({
      isDelPageVis: visible,
    })
  }

  handleTransition = () => {
    console.log(333)
  }

  handleClick = (e) => {

  }

  render () {
    const { isDelPageVis, height } = this.state;

    return (
      <Fragment>
      <div className="myresume">
        <ul className="myresume-list">
          <li className="myresume-item">
            我的简历20201101
            <div className="delete--wrapper">
              <div id="js-resume-delete" className="resume-delete" onClick={this.showDeletePage}>
                <i className="icon-delete"></i>
              </div>
            </div>
          </li>
          <li className="myresume-item">
            我的简历20201130
            <div className="delete--wrapper">
              <div id="js-resume-delete" className="resume-delete" onClick={this.showDatailPage}>
                <i className="icon-delete"></i>
              </div>
            </div>
          </li>
        </ul>
        
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
      <BottomModal isPageShow={this.deletePageVisible} isDelPageVis={isDelPageVis} height={height}></BottomModal>
      </Fragment>
    )
  }
}
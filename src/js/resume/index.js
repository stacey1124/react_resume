import React, { Fragment } from 'react';
import { Router } from 'react-router'

import {
  Player,
  ControlBar,
  PlayToggle,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
  BigPlayButton 
} from 'video-react';

import BottomModal from '../common/bottom-modal'
import DelResume from './delete-resume'
import DetailResume from './detail-resume'

import classnames from 'classnames';

import '../../css/bottom-modal.css'
import '../../css/resume.css'
import 'antd/dist/antd.css';
// import img1 from '../../img/player.png'
// import img2 from '../../img/movie.ogv'
export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      isVis: false,
      height: 0,
      modalName: ''
    }
    this.timeOutEvent = 0;
    this.startTime = 0;
    this.endTime = 0;
  }
  componentDidMount() {

  }
  getChildMsg = (msg) => {
    this.setState({
      childMsg: msg
    })
  }

  // handleClick = () => {
  //   fetch("/api/position/detail?format=json&brand=28&id=113")
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log("data:",data);
  //   })
  // }
  
  showModal = () => {
    //modalPage1
    //点击时出现浮层Modal
    // this.setState({
    //   visible: true,
    //   modalName: 'modalPage1'
    // })
  }
  
  showModalDetail = () => {
    //modalPage2
    // 点击时出现浮层Modal
    this.setState({
      visible: true,
      modalName: 'modalPage2'
    })
  }


  closeModal = () => {
    this.setState({
      visible: false
    })
  }
  
  //长按事件
  handleTouchStart = (e) => {
    this.startTime = +new Date();
    this.timeOutEvent = setTimeout(function() {
      
    }, 700)
    e.preventDefault();
  }

  handleTouchEnd = () => {
    this.endTime = +new Date();
    clearTimeout(this.timeOutEvent)
    if( this.endTime - this.startTime < 700 ) {
      console.log("点击事件");
      //处理点击事件
    } else {
      console.log("长按事件");
      //否则是长按事件-显示弹窗
      this.setState({
        visible: true,
        modalName: 'modalPage2'
      })
    }
  }


  handleArrow = (param) => {
    console.log(param)
  }

  render () {
    const arrowParam = "箭头函数传参_merge";
    const { visible, delTitle, modalName } = this.state;
    let modalContent;


    if (modalName && modalName == 'modalPage1') {
      modalContent = <DelResume></DelResume>
    } else {
      modalContent = "内容2"
    }
    return (
      <Fragment>
      <div className="myresume">
        <ul className="myresume-list">
          <li className="myresume-item">
            我的简历20201101
            <div className="delete--wrapper">
              <div 
                id="js-resume-delete" 
                className="resume-delete" 
                onClick={this.showModal}
                onTouchStart={this.handleTouchStart}
                onTouchMove={this.handleTouchMove}
                onTouchEnd={this.handleTouchEnd}
              >
                <i className="icon-delete"></i>
              </div>
            </div>
          </li>
          <li className="myresume-item">
            我的简历20201130
            <div className="delete--wrapper">
              <div id="js-resume-delete" className="resume-delete" onClick={this.showModalDetail}>
                <i className="icon-delete"></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div 
        className="text" 
        style={{border: "1px solid #ccc",width: "200px", height: "200px", background: "green"}}
        onClick={() => 
          this.handleArrow(arrowParam)
        }
        >

      </div>

      <video controls="controls" autoPlay="autoplay">
        <source src={img2}></source>
      </video>
      <img src={img1}></img>

      <Player poster={img1} src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" >
      {/* <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
      <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" /> */}
      <BigPlayButton position="right"/>
      <PlayToggle />
      <ControlBar>
        <ReplayControl seconds={10} order={1.1} />
        <ForwardControl seconds={30} order={1.2} />
        <CurrentTimeDisplay order={4.1} />
        <TimeDivider order={4.2} />
        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        <VolumeMenuButton disabled />
      </ControlBar>
    </Player>

      <BottomModal
        onClose={this.closeModal} 
        visible={visible} 
      >
        {/* 内容可以从其他组件传递过来 */}
        {modalContent}
      </BottomModal>

      </Fragment>
    )
  }
}
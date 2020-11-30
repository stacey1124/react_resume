import React, { Fragment } from 'react';
import { findDOMNode } from 'react-dom';

import classnames from 'classnames';
import '../../css/bottom-modal.css'

export default class BottomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: false
    }
  }

  componentDidMount() {

  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.isDelPageVis != this.props.isDelPageVis && this.props.isDelPageVis) {
      this.setState({
        vis: this.props.isDelPageVis
      })
    }
  }


  handleCancel = () => {
    const visible = false;
    this.props.isPageShow(visible);
  }

  handleAnimationEnd = (e) => {
    //animation结束之后再设置display: none
    // 需要判断leave动画结束
    console.log("动画结束后")

    if (!this.props.isDelPageVis) {
      this.setState({
        vis: false
      })
    }
  }

  render() { 
    const { vis } = this.state;
    const { isDelPageVis } = this.props
    return (
      <Fragment>
        <div className="modal-component" style={{display: vis ? "block" : "none"}}>
          <div className={classnames("popup-mask", isDelPageVis ? "popup-fade-enter" : "popup-fade-leave")} 
            onAnimationEnd={this.handleAnimationEnd}
          >
          </div>
          <div className="popup-container">
            <div className={classnames("delete--wrapper", isDelPageVis ? "popup-slide-enter" : "popup-slide-leave")} onTransitionEnd={this.handleTransition}>
              <div className="delete__resume">删除简历</div>
              <div className="delete__cancel" onClick={this.handleCancel}>取消</div>
            </div>
          </div>
        </div>

      </Fragment>

    )
  }
}
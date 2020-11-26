import React, { Fragment } from 'react';
import { findDOMNode } from 'react-dom';

import classnames from 'classnames';
import '../../css/bottom-modal.css'

export default class BottomModal extends React.Component {
  constructor(props) {
    super(props);
  }


  handleCancel = () => {
    const visible = false;
    const height = 130;
    this.props.isPageShow({visible, height});
    const modalCom = document.getElementById("#modalComponent");
    console.log("modalCom", modalCom)
  }



  render() { 
    // console.log("this.refs.modalComponent", this.refs.modalComponent)
    

    const { isDelPageVis } = this.props
    const isModalShow = isDelPageVis ? "block" : "none";
    console.log("this.props.isDelPageVis:", this.props.isDelPageVis)
    let height = isDelPageVis ? 0 : 130;
    const btmStyle = { "transform": "translateY(" + `${height}` + "px)" }

    return (
      <Fragment>
       
        <div style={{display: isModalShow}} ref="modalComponent" id="modalComponent" >
          <div className={classnames("popup-mask", isDelPageVis ? "pop-fade-enter" : "pop-fade-out")} 
          >
          </div>

          <div className="bottom-modal">
            <div className="delete--wrapper" style={btmStyle}>
              <div className="delete__resume">删除简历</div>
              <div className="delete__cancel" onClick={this.handleCancel}>取消</div>
            </div>
          </div>
        </div>

      </Fragment>

    )
  }
}
import React, { Fragment } from 'react';
import classnames from 'classnames';
import '../../css/bottom-modal.css'

export default class BottomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.visible != this.props.visible && this.props.visible) {
      this.setState({
        vis: this.props.visible
      })
    }
  }

  closeModal = () => {
    const { onClose } = this.props
    onClose && onClose()
  }

  handleAnimationEnd = (e) => {
    //animation结束之后再设置display: none
    // 需要判断leave动画结束
    console.log("动画结束后")
    if (!this.props.visible) {
      this.setState({
        vis: false
      })
    }
  }

  render() { 
    const { vis } = this.state;
    const { visible, headerTitle, children } = this.props
    console.log("vis:", vis)
    return (
      <Fragment>
        <div className="modal-component" style={{display: vis ? "block" : "none"}}>
          <div className={classnames("popup-mask", visible ? "popup-fade-enter" : "popup-fade-leave")} 
            onClick={this.closeModal}
            onAnimationEnd={this.handleAnimationEnd}
          >
          </div>
          <div className={classnames("popup-container", visible ? "popup-slide-enter" : "popup-slide-leave")}> 
            <div className="popup-header">{children}</div>
            <div className="popup-body" onClick={this.closeModal}>取消</div>
          </div>
        </div>

      </Fragment>

    )
  }
}
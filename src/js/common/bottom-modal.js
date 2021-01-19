import React, { Fragment } from 'react';
import classnames from 'classnames';
import '../../css/bottom-modal.css'

export default class BottomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: false
    }
    this.container = element => this.popupRef = element;
  }

  componentDidMount() {
    console.log("didMounted")
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.visible != this.props.visible && this.props.visible) {
      console.log("this.popupRef.scrollTop", this.popupRef.scrollTop)
      this.popupRef.addEventListener("touchstart", function(e){
        console.log("e.target:", e.target)
        console.log("e.target", e.touches[0].clientY)
      }, false)
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
  handleTouchStart = (e) => {
    this.startY = e.touches[0].clientY
    console.log("startY:", e.touches[0].clientY)
  }
  handleTouchMove = (e) => {
    console.log("this.popupRef.scrollTop：：", this.popupRef.scrollTop)
    let moveY = e.touches[0].clientY
    console.log('moveY::', moveY);
    console.log('this.startY::', this.startY);
    console.log("滚动区域高度", this.popupRef.scrollHeight)
    let scrollTop = this.popupRef.scrollTop
    this.maxScroll = this.popupRef.scrollHeight
    this.clientHeight = this.popupRef.clientHeight
    let distanceY = moveY - this.startY
    if (distanceY > 0 && scrollTop == 0) {
      console.log('向下滚动并且滚动到底部::');
      //阻止默认行为
      this.popupRef.preventDefault()
      this.popupRef.stopPropagation()
    } else if (distanceY < 0 && scrollTop + this.offsetHeight >= this.maxScroll) {
      console.log('向上滚动，并且滚动到顶部::');
      //阻止默认行为
      
    }
    
    
  }
  handleTouchEnd = (e) => {

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
          <div className={classnames("popup-container", visible ? "popup-slide-enter" : "popup-slide-leave")}
            ref={this.container}
            onTouchStart={this.handleTouchStart}
            onTouchMove={this.handleTouchMove}
            onTouchEnd={this.handleTouchEnd}
          > 
            <div className="popup-header">
              {children}
            </div>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <h1>滚动内容标题</h1>
            <div className="popup-body" onClick={this.closeModal}>取消</div>
          </div>
        </div>

      </Fragment>

    )
  }
}
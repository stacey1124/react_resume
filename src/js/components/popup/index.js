import React, { Component } from 'react'
import 'popup.css'
export default class Popup extends Component{
  render() {
    return(
      <div className="component-popup">
        <div className="popup-mask"></div>
        <div className="popup-container">
          <div className="popup-header">标题</div>
        </div>
      </div>
    )
  }
}
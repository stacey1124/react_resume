import React, { useState } from 'react'
import './popup.css'
function Modal(props) {


  return (
    <div className="popup-component">
      <div className="popup-mask" onClick={() => props.closeModal(false)}></div>
      <div className="popup-container">
        <div className="popup-header">Modal标题</div>
        <div className="popup-content">Modal内容</div>
      </div>
    </div>
  )
}
export default Modal
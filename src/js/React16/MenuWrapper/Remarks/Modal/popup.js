import React, { useState, useEffect } from 'react'
import './popup.css'
function Modal(props) {
  const [data, setData] = useState(0)
  useEffect(() => {
    // dom渲染之后做的事情
    // debugger
    console.log("useEffect");//会打印两遍 1、DidMounted 2、DidUpdate
    setData(0);//相当于setState
    // debugger
    console.log("data:", data);
    return(() => {//willUnMounted
      console.log("willUnMounted")
    })
    // return function cleanup() {
    //   console.log("willUnmounted")
    // }
  })
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
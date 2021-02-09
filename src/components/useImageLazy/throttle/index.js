import React, { useRef, useState, useEffect } from 'react'

//节流
const useThrottle = (fn, wait, deps = []) => {
  
  //概念：小于wait时间触发事件并不会频繁发生，将事件发生频率稀释到>=wait
  // let pre = 0;//直接这样写会发现pre的值每次都是0
  let pre = useRef(0)
  const [time, setTime] = useState(wait)
  // let that = this;
  useEffect(() => {
    console.log("pre:", pre.current)
    console.log("useThrottle中的useEffect执行了几次")
    let now = Date.now();
    if(now - pre.current > wait) {
      console.log("函数执行几次")
      fn()
      console.log("argument:", arguments)
      // fn.apply(that);//执行事件
      pre.current = now
    }
  }, deps)
}
export default useThrottle
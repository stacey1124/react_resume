import React, { useState, useEffect, useRef } from 'react'
import useThrottle from './throttle'
const useImageLazy = (domList) => {
  const [scrollCount, setScrollCount] = useState(0)
  const saveCallback = useRef()
  const scrollEvent = () => {
    setScrollCount(scrollCount + 1)
  }
  useEffect(() => {
    saveCallback.current = scrollEvent
  })
  useEffect(() => {
    let tick = () => {
      console.log("tick执行了几次")
      saveCallback.current()
    }

    console.log('useEffect执行几次');
    document.addEventListener("scroll", tick)
    return () => {
      document.removeEventListener("scroll", tick)
    }
  }, [])//第二个参数传递一个空数组，useEffect只执行一次
  // console.log('domList::', domList);
  // console.log('document.documentElement::', document.documentElement.scrollTop);
  
  let scrollTop = document.documentElement.scrollTop;
  let clientHeight = document.documentElement.clientHeight;
  // console.log('clientHeight::', clientHeight);
  
  const getTop = () => {
    for(let i = 0; i < domList.length; i++) {
      let { top } = domList[i].getBoundingClientRect()
      let len = domList.length
      if(top < scrollTop + clientHeight) {
        // console.log('domList[i].datasrc::', domList[i].dataset.src);
        domList[i].src = domList[i].dataset.src
        domList.splice(i, 1)
        i--;
        len--;
      }
    }
  }
  useThrottle(getTop, 3000, [scrollCount]);//如果后面不加[scrollCount]也会更新？
}
export default useImageLazy
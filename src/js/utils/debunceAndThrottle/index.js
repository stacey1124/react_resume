export default () => {
  

}
// 非立即执行防抖
export function debunce(fun, wait) {
  let timeId = null
  return function() {
    let arg = arguments
    let that = this
    if (timeId) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(() => {
      fun.apply(that, arguments);
    }, wait)
  }
}
// 节流
export function throttle(fun, wait) {
  let prev = 0;
  return function() {
    let arg = arguments
    let that = this
    let now = Date.now()
    if (now - prev > wait) {
      fun.apply(that, arg)
      prev = now
    } 
  }
}


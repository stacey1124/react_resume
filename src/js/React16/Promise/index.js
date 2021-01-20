export default class MyPromise {
    // promise使用
    // new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(1)
    //   }, 2000)
    // }).then((val) => {
    //   console.log('val::', val);
    // })
  constructor(fn) {//fn为调用构造函数时的参数new MyPromise(XXX中的内容)
    this.state = "pending"
    this.resolvedCallbacks = []
    this.rejectedCallbacks = []
    // 函数的调用需要在constructor中, 并且需要使用this.resolve
    fn(this.resolve, this.reject);
  }
  // resolve函数的实现
  resolve = (val) => {
    if(this.state == 'pending') {
      this.state = 'resolved'
      this.resolvedCallbacks.map(cb => cb(val))
    }
  }
  //  rejected函数的实现
  rejected = (err) => {
    if(this.state == 'pending') {
      this.state = 'rejected'
      this.rejectedCallbacks.map(cb => cb(err))
    }
  }

}
MyPromise.prototype.then = function (onFullfilled, onRejected) {
  console.log("this:", this)  
  //如果onFullfilled不是函数的话需要：透传：v => v保证下一个then可以获取到val值 
  onFullfilled = typeof onFullfilled === 'function' ? onFullfilled : v => v
  onRejected = typeof onRejected == 'function' ? onRejected : e => { throw e }  

  if(this.state == 'pending') {
    this.resolvedCallbacks.push(onFullfilled)
    this.rejectedCallbacks.push(onRejected)
  }
  if(this.state == 'resolved') {
    onFullfilled(this.value)
  }
  if(this.state == 'rejected') {
    onRejected(this.value)
  }
}

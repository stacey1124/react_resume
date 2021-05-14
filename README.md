1、promise
2、throttleAndDebounce

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>promise</title>
</head>
<body>
  
</body>
<script>

class MyPromise {
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
  reject = (err) => {
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
MyPromise.prototype.catch = function(errCallback) {
  return this.then(null, errCallback)
}
// MyPromise.prototype.all = function(data) {
//   console.log("data:", data)
// }
function all(promises) {
  //
  

  // // console.log("this:", this);
  // // console.log("data", data)
  // let arr = [];
  // let that = this
  // // console.log("resolve:", this.resolve);
  // return new MyPromise(function(resolve, reject) {
  //   promises.forEach((promise, index) => {
  //     promise.then((res) => {
  //       console.log("res:", res);
  //       arr.push(res)
  //       if(arr.length === promises.length) {
  //         console.log("aaaa1111", arr);
  //         // return resolve(arr)
  //         return resolve(arr)
  //       }
  //     }).catch(err => {
  //       return reject(err)
  //     })
  //   })
  // })

  // promises.forEach((promise, index) => {
    // let that = this;
    // console.log("this111:", that);
    // console.log("promise", promise);
    // promise.then((res) => {
    //   console.log("res", res);
    //   arr.push(res);
    //   if(arr.length === data.length) {// 所有数据都成功之后才会resolve
    //     console.log("1111aaaa");
    //     resolve(arr)
    //   }
    // })
  // })
}


//调用:
let p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111)
  }, 1000);
})
p1.then((a) => {
  console.log("a", a);
})
let p3 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333)
  }, 2000);
})
let p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(2222)
    // resolve(2222)
  }, 2000);
})

// let arr = all([p1, p2, p3])
all([p1, p2, p3]).then((res) => {
  console.log("返回的arr",res);
})

let pp1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(123)
  }, 2000);
})

// let pp2 = Promise.resolve(2);
// let pp3 = Promise.resolve(3);
// let pp4 = Promise.resolve(4);
// const test = () => {
//   Promise.all([pp1, pp2, pp3, pp4]).then((res) => {

//     console.log("arr1", res);
//   })
// }
// test()

</script>
</html>


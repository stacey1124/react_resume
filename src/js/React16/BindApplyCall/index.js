export default class CallApplyBind {
  constructor() {
    // *******************start
    // 1、bind call apply的使用
    var obj = {
      name: "stacey",
      f: function(c1, c2) {
        console.log(this.name, c1, c2)
      }
    }
    var bindObj = {
      name: "xyf"
    }
    var callObj = {
      name: "call"
    }
    var applyObj = {
      name: "apply"
    }
    var bindObj = {
      name: "bind"
    }

    obj.f();//打印stacey
    obj.f.call(callObj, 1, 2);//打印call 1 2
    obj.f.apply(applyObj, [1, 2])
    obj.f.bind(bindObj, 1, 2)()
    //1、手动实现一个call
    Function.prototype.myCall = function() {
      // console.log('arguments::', arguments);
      // console.log('...arguments::', ...arguments);
      // console.log("obj.f:", this);//this表示myCall的调用者:obj.f->对应的函数function(){console.log(this.name)}
      // console.log('callObj', arguments[0]);//arguments[0]表示myCall中传进来的callObj对象
      let args = [...arguments].slice(1)
      // console.log("args:", ...args)
      let context = arguments[0];//context为 {name: 'call'}
      //给context对象添加属性fn， 并将函数this赋值给fn context为{name: 'call', fn: function(){console.log(this.name)}}
      context.fn = this;//*重点
      context.fn(...args);//调用自己内部的fn()
      delete context.fn;//使用完之后删除对象的属性
    }
    obj.f.myCall(callObj, 1, 2)

    //2、手动实现一个apply
    Function.prototype.myApply = function() {
      console.log("arguments:", arguments)
      let context = arguments[0]
      context.fn = this
      // 参数传递
      let args = arguments[1]
      console.log("args:", args)
      context.fn(...args)
      delete context.fn
    }
    obj.f.myApply(applyObj, [1,2,3])

    // 3、手动实现一个bind
    Function.prototype.myBind = function() {
      console.log('arguments::', arguments);
      console.log('this::', this);//obj.f调用myBind所以myBind的this指向function
      let that = this
      let context = arguments[0]
      let args = [...arguments].slice(1);//数组形式的参数
      return function() {
        context.fn = that
        return context.fn(...args)
      }
    }
    console.log('obj.f.myBind(bindObj, 1, 2)::', obj.f.myBind(bindObj, 1, 2));

    obj.f.myBind(bindObj, 1, 2)()
    // *****************end
    }

}
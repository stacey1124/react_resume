import React, {useState} from "react"

// export default class Test extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 1,
//       count: 0
//     }
//   }

//   componentDidMount() {
//     document.title = `按钮点击了 ${this.state.count} 次`
//   }

//   componentDidUpdate() {
//     document.title = `按钮点击了 ${this.state.count} 次`
//   }

//   render () {
//     const { increment } = this.props
//     const { counter, count } = this.state
//     return (
//       <div>
//         <p>计数测试</p>
//         <button
//           onClick={() => {
//             // this.setState({counter: counter + increment})
//             // console.log("counter", counter)
//             this.setState((state, props) => ({
//               counter: state.counter + props.increment
//             }))
//           }}
//         >
//           点击按钮计数器+1
//         </button>
//         <p>{counter}</p>
//         <button onClick={() => {this.setState({
//           count: count + 1
//         })}}>
//           计数 {count}
//         </button>
//       </div>
//     )
//   }
// }

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount)
  console.log("initialCount:", initialCount)
  return (
    <>
      <br/>
      <button onClick={() => {setCount(prePage => prePage -1)}}>上一页</button>
      <p>当前第{count}页</p>
      <button onClick={() => {setCount(prePage => prePage + 1)}}>下一页</button>
    </>
  )
}

export default Counter;
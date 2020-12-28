import React from "react"

export default class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 1
    }
  }
  render () {
    const { increment } = this.props
    const { counter } = this.state
    return (
      <div>
        <p>计数测试</p>
        <button
          onClick={() => {
            // this.setState({counter: counter + increment})
            // console.log("counter", counter)
            this.setState((state, props) => ({
              counter: state.counter + props.increment
            }))
          }}
        >
          点击按钮计数器+1
        </button>
        <p>{counter}</p>
      </div>
    )
  }
}
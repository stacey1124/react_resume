// 消费者所在层级
import React, { Fragment } from 'react'
import Context from './context'

export default class Page extends React.Component {
  render() {

    return (
      <Context.Consumer>
        {(data) => {
          console.log("测试consumer中的data有没有传递过来", data)
          return (
            <Fragment>
              <div>{data.name}</div>
              <div>测试</div>
            </Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}
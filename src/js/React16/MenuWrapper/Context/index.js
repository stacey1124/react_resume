// provider所在
import React from 'react'
import ResumeContext from './context'
import Page from './page'

export default class ContextTest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {name: '哈哈', age: '23'}
    }

  }
  render() {
    const { data } = this.state
    return (
      // 提供者提供数据（消费者所在的组件）
      <ResumeContext.Provider
        value={{
          data: data
        }}
      > 
        <div>123</div>
        <Page />
      </ResumeContext.Provider>
      )
  }
}

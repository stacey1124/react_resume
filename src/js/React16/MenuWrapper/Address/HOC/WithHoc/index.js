import React, { Component, Fragment } from 'react'
function withSubscription(WrapComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        data: selectData(DataSource, props)
      }
    }
    componentDidMount() {
      DataSource.addChangeListener()
    }
    componentWillUnmount() {
      DataSource.removeChangeListener()
    }
    handleChange = () => {
      this.setState({
        data: selectData(DataSource, props)
      })
    }
    render() {
      const { data } = this.state
      console.log('this.props::', this.props);
      console.log('selectData::', data);
      
      return(
        <Fragment>
          <WrapComponent data={data}>高阶组件</WrapComponent>
        </Fragment>
      )
    }
  }

}
export default withSubscription
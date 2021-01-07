import React, { Fragment } from 'react'
import Context from './context'

import { Select } from 'antd'
const { Option } = Select
export default class DropSelect extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {name: '王建安', age: 27, phone: '13567777666'}, 
      type: 'basic'
    }
  }
  render() {
    const { data, type } = this.state
    const { handleChange } = this.props
    return (
      <Fragment>
        <Select 
          onChange={handleChange}
        >
          <Option value='是'>是</Option>
          <Option value='否'>否</Option>
        </Select>
      </Fragment>
    )
  }
}
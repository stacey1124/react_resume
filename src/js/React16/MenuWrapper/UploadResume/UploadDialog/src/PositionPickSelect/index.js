import React, { Component } from 'react'
import { Select } from 'antd'
const { Option } = Select
const selectData = [
  '2021前端工程师[上海]',
  '2020后端[成都]',
  '2020测试[武汉]',
  '产品经理',
  '项目经理-重庆',
  '20210111测试',
  '5-项目5',
  '6-项目6',
  '7-项目7',
  '8-项目8',
  '9-项目9'
]
export default class PositionPickSelect extends Component {

  render() {
    console.log("this.props:", this.props)
    return(
      <Select>
      </Select>
    )
  }
}

PositionPickSelect.defaultProps = {
  fetchOptions: () => {
    let fetchOptions = {
      url: '/atsng/position/listCommon',
      data: {
        name: 'key',
        page: 1,
        recruit_type: 0,
        size: 90
      }
    }
    return fetchOptions
  }
}

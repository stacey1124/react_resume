import React, { Component } from 'react'
import { Select } from 'antd'
import fetch from 'isomorphic-fetch'
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

  componentDidMount() {
    fetch('/getSelect').then(res => {
      res.text()
    }).then(results => {
      results = selectData
      console.log("results", results)
    })
  }
  onSearch = (val) => {
    console.log("search-value", val)
  }
  handleChange = (val) => {
    console.log('val::', val);


    this.props.selectChange(val)
  }
  render() {
    console.log("this.props:", this.props)
    return(
      <Select
        showSearch
        placeholder="请输入职位"
        style={{width: '100%'}}
        dropdownStyle={{width: '100%'}}
        filterOption={(input, option) => {
          return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }}
        // filterOption={(input, option) => 
        //   option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        // }
        // onSearch={this.onSearch}
        onChange={this.handleChange}
      >
        {this.props.dataList.map(item => {
          return(
            <Option key={item} value={item}>{item}</Option>
          )
        })}
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
  },
  dataList: selectData
}

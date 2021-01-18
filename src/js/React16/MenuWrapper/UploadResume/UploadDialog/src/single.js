import React, { Component, Fragment } from 'react'
import fetch from 'isomorphic-fetch'
import './SingleUpload/src/mock/data'
import { TreeSelect } from 'antd'
import { FileOutlined } from '@ant-design/icons';
import fileImg from './SingleUpload/src/img/file.PNG'
import Mock from 'mockjs'

const { TreeNode } = TreeSelect
const img = (<img src={fileImg} />)
const treeData =  [
  {
    id: '101',
    title: '简历文件夹1',
    value: '0-0',
    children: [
      {
        id: '101-1',
        title: '简历子文件夹',
        value: '0-0-1',
        switcherIcon: img
      },
      {
        id: '101-2',
        title: '简历子文件夹2',
        value: '0-0-2',
        switcherIcon: img
      },
    ],
  },
  {
    title: '人才库文件夹',
    value: '0-1',
    id: '102',
    children: [
      {
        id: '102-1',
        title: '简历子文件夹',
        value: '0-0-1',
        switcherIcon: img
      },
      {
        id: '102-2',
        title: '简历子文件夹2',
        value: '0-0-2',
        switcherIcon: img
      },
    ],
  },
]
export default class SingleForm extends Component {
  componentDidMount() {
    // const res = {
    //   code: 0,
    //   data: [
    //     {name: "we", age: 23}
    //   ]
    // }
    fetch('/treeData/list').then(res => {
      res.json();
    }).then((results) => {
      console.log('results::', results);
    })
  }
  handleSelect = (val) => {
    console.log('val::', val);
    fetch("/changeDir", {
      method: "post",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "id=" + val
    })
    // .then(funciton(res) {
    // })    
  }
 
  render() {
    return (
      <Fragment>
        {/* 复制到的功能 */}
        <TreeSelect
          style={{ width: '100%' }}
          placeholder="请选择对应的文件夹"
          switcherIcon={img}
          treeData={treeData}
          onSelect={this.handleSelect}
        >
          {/* <TreeNode value="一级文件夹" title="一级文件夹"  >
            <TreeNode value="一级文件夹-子文件夹1" title="一级文件夹-1" switcherIcon={img}></TreeNode>
            <TreeNode value="一级文件夹-子文件夹2" title="一级文件夹-2" switcherIcon={img}></TreeNode>
          </TreeNode>
          <TreeNode value="一级文件夹2" title="一级文件夹2">
            <TreeNode value="一级文件夹2-子文件夹1" title="一级文件夹-1" switcherIcon={img}></TreeNode>
            <TreeNode value="一级文件夹2-子文件夹2" title="一级文件夹-2" switcherIcon={img}></TreeNode>
          </TreeNode> */}
        </TreeSelect> 
      </Fragment>
    )
  }
}
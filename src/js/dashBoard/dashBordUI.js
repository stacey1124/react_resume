import React, { Fragment } from 'react'
import { Select, Input, Button, List } from 'antd'

const { Option } = Select
// 无状态组件\
const DashBoardUI = (props) => {
  return(
    <Fragment>
      <div onClick={props.handleClick}
        style={{width: "50px", height: "50px", backgroundColor: "pink", marginLeft: "50px", display: "flex", justifyContent: "center"}}
      >
        {/* {store.getState().value} */}
        {props.value}
      </div>
      <button onClick={props.handleIncrement}>点击+1</button>
      <button onClick={props.handleDecrement}>点击-1</button>
      <Select
        showSearch
        style={{width: 200, display: 'block', marginLeft: 30}}
        // onChange={this.handleChange}
        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        
      >
        {props.listData.map((item) => <Option>{item}</Option>)}
      </Select>
      <Input placeholder="请输入新增的项目" style={{width: 200, marginLeft: 30, marginRight: 5}}
        onChange={props.handleChange}
        value={props.inputValue}
      ></Input>
      <Button type="primary" onClick={props.handleAddItem} style={{backgroundColor: 'blue'}}>点击增加item</Button>
      <List
        style={{width: 200, border: '1px solid #ccc', marginLeft: 200}}
        dataSource={props.listData}
        renderItem={(item, index) => (
          // <List.Item onClick={props.delItem.bind(this, index)}>{item}</List.Item>
          <List.Item onClick={() => {console.log("index", index);props.delItem(index)}}>{item}</List.Item>
        )}
      >
      </List>
    </Fragment>
  )
}
export default DashBoardUI
// export default class DashBoardUI extends React.Component {
//   render() {
//     console.log('props.listData::', props.listData);
    
//     return(
//       <Fragment>
//         <div onClick={props.handleClick}
//           style={{width: "50px", height: "50px", backgroundColor: "pink", marginLeft: "50px", display: "flex", justifyContent: "center"}}
//         >
//           {/* {store.getState().value} */}
//           {props.value}
//         </div>
//         <button onClick={props.handleIncrement}>点击+1</button>
//         <button onClick={props.handleDecrement}>点击-1</button>
//         <Select
//           showSearch
//           style={{width: 200, display: 'block', marginLeft: 30}}
//           // onChange={this.handleChange}
//           filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          
//         >
//           {props.listData.map((item) => <Option>{item}</Option>)}
//         </Select>
//         <Input placeholder="请输入新增的项目" style={{width: 200, marginLeft: 30, marginRight: 5}}
//           onChange={props.handleChange}
//           value={props.inputValue}
//           ref={this.selectRef}
//         ></Input>
//         <Button type="primary" onClick={props.handleAddItem} style={{backgroundColor: 'blue'}}>点击增加item</Button>
//         <List
//           style={{width: 200, border: '1px solid #ccc', marginLeft: 200}}
//           dataSource={props.listData}
//           renderItem={(item, index) => (
//             // <List.Item onClick={props.delItem.bind(this, index)}>{item}</List.Item>
//             <List.Item onClick={() => {console.log("index", index);props.delItem(index)}}>{item}</List.Item>
//           )}
//         >
//         </List>
//       </Fragment>
//     )
//   }
// }
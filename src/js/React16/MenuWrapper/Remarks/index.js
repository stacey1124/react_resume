import React, { Fragment, useState } from 'react'
import Modal from './Modal/popup'
import { Button } from 'antd'

// export default class Reamrks extends React.Component {
//   render() {
//     return (
//       <Fragment>
//         <h1>HOOK</h1>
//         <Button>点击出现Modal</Button>
//         <Modal></Modal>
//       </Fragment>
//     )
//   }
// }
export default function Remarks() {
  const [vis, isVis] = useState(false)
  const showModal = () => {
    isVis(true)
  }
  return (
    <Fragment>
      <h1>HOOK</h1>
      {/* <Button onClick={() => isVis(true)}>点击出现Modal</Button> */}
      <Button onClick={showModal}>点击出现Modal</Button>
      {vis ? (<Modal closeModal={(isShow) => isVis(isShow)}></Modal>) : null}
    </Fragment>
  )
}
import React, { Fragment } from 'react';
import { Button, Modal } from "antd";

export default class DelResumeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vis: false
    }
  }

  delReasume = () => {
    console.log('删除弹框')
  }

  render() {
    return (
      <div className="delete-resume" onClick={this.delReasume}>删除简历1</div>
    )
  }


}
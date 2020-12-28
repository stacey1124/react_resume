import React, { Fragment } from 'react';
import Test from './Test'
import Temperature from './Temperature'
import { isNumber } from 'lodash'
export default class React16 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      increment: 2
    }

  }
  render() {
    const { increment } =this.state;
    return (
      <Fragment>
        <Test increment={increment} />
        <Temperature />
      </Fragment>
    )
  }
}
import React, { Fragment, Component } from 'react'
import '../../../../../data'
import withSubscription from '../WithHoc'
class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // comments: DataSource.getComments()
    }
  }
  componentDidMount() {
    // console.log('this.handleChange::', this.handleChange);
    // DataSource.addChangeListener(this.handleChange)
  }
  componentWillUnmount() {
    // DataSource.removeChangeListener(this.handleChange)
  }
  // handleChange = () => {
  //   console.log('handleChange::', handleChange);
  //   this.setState({
  //     comments: DataSource.getComments()
  //   })
  // }
  render() {
    // const { comments } = this.state
    const { data } = this.props
    console.log('this.state.comments::', this.state.comments);
    return(
      <Fragment>
        {data.map((comment) => (
          <div>{comment.name}</div>
        ))}
      </Fragment>
    )
  }
}
export default withSubscription(Comment, (DataSource) => DataSource.getComments())
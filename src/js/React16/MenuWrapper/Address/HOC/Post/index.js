import React, { Fragment, Component } from 'react'
import withSubscription from '../WithHoc'
import '../../../../../data'
class Post extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
      // blogPost: DataSource.getBlogPost(props.id)
    // }
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
  //     blogPost: DataSource.getBlogPost(this.props.id)
  //   })
  // }
  render() {
    // const { blogPost } = this.state
    const { data } = this.props
   return(
     <Fragment>
       {data.map((item) => (
        <span>
          {item.content}
        </span>
       ))}
     </Fragment>
   )
    
  }
}
export default withSubscription(Post, (DataSource, props) => DataSource.getBlogPost(props.id))
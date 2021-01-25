import React, { Fragment } from 'react'
import Comment from './HOC/Comments'
import Post from './HOC/Post'
import './HOC/WithHoc'

export default class Address extends React.Component {
  // const CommentListWithSubscription = withSubscription()
  // const BlogPostWithSubscription 
  render() {
    return (
      <Fragment>
        <h1>地址</h1>
        <Comment></Comment>
        <Post id={1}></Post>
      </Fragment>
    )
  }
}
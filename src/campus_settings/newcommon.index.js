import React from 'react'

export default class AddNewSite extends React.Component {
  render() {
    let { children } = this.props;
    let childrenProps = children.props;
    console.log("children:", children);//span...
    console.log("children.props", children.props)
    console.log("this.dialog:", this.dialog)
    return (
      React.cloneElement(
        children, {
          ...childrenProps,
          onClick: (e) => {
            this.dialog.show()
          }
        }

      )
    )
  }
}
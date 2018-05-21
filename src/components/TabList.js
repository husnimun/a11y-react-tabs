import React from 'react'

export default class TabList extends React.Component {
  render() {
    const { children, className, ...attributes } = this.props
    return (
      <div {...attributes} className={className} role="tablist">
        {children}
      </div>
    )
  }
}

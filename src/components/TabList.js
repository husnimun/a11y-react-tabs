import React from 'react'

const DEFAULT_CLASS = 'a11y-react-tabs__tablist'

export default class TabList extends React.Component {
  static defaultProps = { className: DEFAULT_CLASS }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
  }

  render() {
    const { children, className } = this.props
    return (
      <div className={className} role="tablist">
        {children}
      </div>
    )
  }
}

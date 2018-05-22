import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { TabsConsumer } from './Tabs'

const DEFAULT_CLASS = 'a11y-react-tabs__tab-panel'

class TabPanel extends React.Component {
  static defaultProps = {
    className: DEFAULT_CLASS,
    selectedClassName: `${DEFAULT_CLASS}--selected`,
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    selectedClassName: PropTypes.string,
  }

  state = {
    id: '',
    index: null,
  }

  componentDidMount() {
    this.props.addPanel(({ id }) => {
      this.setState({ id, index: this.props.panelIds.indexOf(id) })
    })
  }

  isSelected = () => {
    return this.props.selectedIndex === this.state.index
  }

  render() {
    const { children, className, selectedClassName } = this.props
    const { id, index } = this.state
    return (
      <div
        id={id}
        className={cx(className, {
          [selectedClassName]: this.isSelected(),
        })}
        role="tabpanel"
        aria-labelledby={this.props.tabIds[index]}
      >
        {this.isSelected() ? children : null}
      </div>
    )
  }
}

export default props => (
  <TabsConsumer>
    {value => (
      <TabPanel {...value} {...props}>
        {props.children}
      </TabPanel>
    )}
  </TabsConsumer>
)

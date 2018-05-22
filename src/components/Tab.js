import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { TabsConsumer } from './Tabs'
import { isTabDisabled } from '../helpers/utils'

const DEFAULT_CLASS = 'a11y-react-tabs__tab'

class Tab extends React.Component {
  static defaultProps = {
    className: DEFAULT_CLASS,
    selectedClassName: `${DEFAULT_CLASS}--selected`,
    disabledClassName: `${DEFAULT_CLASS}--disabled`,
    disabled: false,
  }

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
    selectedClassName: PropTypes.string,
    disabledClassName: PropTypes.string,
    disabled: PropTypes.bool,
  }

  state = {
    id: '',
    index: null,
  }

  componentDidMount() {
    this.props.addTab(({ id }) => {
      this.setState({ id, index: this.props.tabIds.indexOf(id) }, () => {
        this.props.addTabRef({ index: this.state.index, node: this.node })
      })
    })
  }

  componentDidUpdate() {
    this.checkFocus()
  }

  renderChild() {
    const { children, disabled } = this.props
    return typeof children === 'function'
      ? children({ selected: this.isSelected(), disabled })
      : children
  }

  checkFocus() {
    const { index } = this.state
    if (this.isSelected() && this.props.tabFocus[index]) {
      this.node.focus()
    }
  }

  handleClick = e => {
    const node = e.target

    if (isTabDisabled(node)) {
      return
    }

    this.props.setIndex(this.state.index)
  }

  handleKeyDown = e => {
    const selectedIndex = this.props.selectedIndex
    this.props.setTabFocus(selectedIndex, true)

    let index = null

    if (e.keyCode === 39 || e.keyCode === 40) {
      // Right/Down key
      index = this.props.getNextTab(selectedIndex)
    } else if (e.keyCode === 37 || e.keyCode === 38) {
      // Left/Up key
      index = this.props.getPrevTab(selectedIndex)
    } else if (e.keyCode === 36) {
      // Home key
      index = this.props.getFirstTab()
    } else if (e.keyCode === 35) {
      // End key
      index = this.props.getLastTab()
    }

    if (index !== null) {
      e.preventDefault()
      this.props.setIndex(index)
      this.props.setTabFocus(index, true)
    }
  }

  isSelected = () => {
    return this.props.selectedIndex === this.state.index
  }

  render() {
    const {
      className,
      disabledClassName,
      selectedClassName,
      disabled,
    } = this.props
    const { id, index } = this.state
    return (
      <div
        ref={node => {
          this.node = node
        }}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
        id={id}
        className={cx(className, {
          [disabledClassName]: disabled,
          [selectedClassName]: this.isSelected(),
        })}
        role="tab"
        aria-selected={this.isSelected()}
        aria-controls={this.props.panelIds[index]}
        aria-disabled={disabled}
        tabIndex={this.isSelected() ? 0 : null}
      >
        {this.renderChild()}
      </div>
    )
  }
}

export default props => (
  <TabsConsumer>
    {value => (
      <Tab {...value} {...props}>
        {props.children}
      </Tab>
    )}
  </TabsConsumer>
)

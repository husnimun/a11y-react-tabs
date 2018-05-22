import React from 'react'
import PropTypes from 'prop-types'
import uuid from '../helpers/uuid'
import { isTabDisabled } from '../helpers/utils'

const TabsContext = React.createContext({})
const TabsProvider = TabsContext.Provider
export const TabsConsumer = TabsContext.Consumer

const DEFAULT_CLASS = 'a11y-react-tabs'

export default class Tabs extends React.Component {
  static defaultProps = {
    className: DEFAULT_CLASS,
  }

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
      PropTypes.object,
    ]),
  }

  addTab = cb => {
    const id = uuid()
    this.setState(
      prevState => ({
        tabIds: [...prevState.tabIds, id],
        tabFocus: [...prevState.tabFocus, false],
      }),
      () => {
        cb && cb({ id })
      }
    )
  }

  addPanel = cb => {
    const id = uuid()
    this.setState(
      prevState => ({ panelIds: [...prevState.panelIds, id] }),
      () => {
        cb && cb({ id })
      }
    )
  }

  setIndex = index => {
    this.setState({ selectedIndex: index })
  }

  setTabFocus = (index, newFocus) => {
    const tabFocus = this.state.tabFocus.map((focus, idx) => {
      if (idx === index) {
        return newFocus
      } else {
        return focus
      }
    })

    this.setState({ tabFocus })
  }

  getTab(index) {
    return this.state.tabRefs && this.state.tabRefs[index]
  }

  getTabsCount() {
    return this.state.tabIds.length
  }

  getActiveTabsCount() {
    const count = this.state.tabIds.length
    let activeCount = 0
    for (let i = 0; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        activeCount++
      }
    }

    return activeCount
  }

  getNextTab = index => {
    const count = this.getTabsCount()

    for (let i = index + 1; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i
      }
    }

    for (let i = 0; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i
      }
    }

    // No other tabs found
    return index
  }

  getPrevTab = index => {
    let i = index
    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i
      }
    }

    i = this.getTabsCount()
    while (i-- > index) {
      if (!isTabDisabled(this.getTab(i))) {
        return i
      }
    }

    // No other tabs found
    return index
  }

  getFirstTab = () => {
    const count = this.getTabsCount()
    for (let i = 0; i < count; i++) {
      if (!isTabDisabled(this.getTab(i))) {
        return i
      }
    }

    return null
  }

  getLastTab = () => {
    let i = this.getTabsCount()
    while (i--) {
      if (!isTabDisabled(this.getTab(i))) {
        return i
      }
    }

    return null
  }

  addTabRef = ({ index, node }) => {
    this.setState(prevState => ({
      tabRefs: {
        ...prevState.tabRefs,
        [index]: node,
      },
    }))
  }

  state = {
    selectedIndex: 0,
    tabRefs: {},
    tabIds: [],
    tabFocus: [],
    panelIds: [],
    setIndex: this.setIndex,
    addTabRef: this.addTabRef,
    addTab: this.addTab,
    addPanel: this.addPanel,
    setTabFocus: this.setTabFocus,
    getFirstTab: this.getFirstTab,
    getLastTab: this.getLastTab,
    getNextTab: this.getNextTab,
    getPrevTab: this.getPrevTab,
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    // If a tab is disabled but it's currently the selected tab,
    // set tab to the next tab
    const { selectedIndex } = this.state
    const currentTab = this.getTab(selectedIndex)
    const activeCount = this.getActiveTabsCount()

    if (activeCount > 0 && isTabDisabled(currentTab)) {
      this.setIndex(this.getNextTab(selectedIndex))
    }
  }

  render() {
    const { className } = this.props
    return (
      <TabsProvider value={this.state}>
        <div className={className}>{this.props.children}</div>
      </TabsProvider>
    )
  }
}

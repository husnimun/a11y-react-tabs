# Simple React Tabs

Primitives to build simple and accessible React tabs component.

## Installation
`a11y-react-tabs` requires React version 16.3 or later.
```bash
npm install a11y-react-tabs
```

## Basic Usage
```js
import { Tabs, TabList, Tab, TabPanel } from 'a11y-react-tabs'

export default () => {
  <Tabs>
    <TabList>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
    </TabList>
    <TabPanel>
      Tab Panel 1
    </TabPanel>
    <TabPanel>
      Tab Panel 2
    </TabPanel>
    <TabPanel>
      <Tabs>
        <TabList>
          <Tab>It Supports</Tab>
          <Tab>Nested Tabs!</Tab>
        </TabList>
        <TabPanel>
          Tab Panel 1
        </TabPanel>
        <TabPanel>
          Tab Panel 2
        </TabPanel>
      </Tabs>
    </TabPanel>
  </Tabs>
}
```

## Components

### `Tabs`
#### props
| Prop                                | Type       | Default                     | Description                             |
| ----------------------------------- | ---------- | --------------------------- | --------------------------------------- |
| `className` <br> _optional_         | `string`   | `a11y-react-tabs`           | Class name for the `<Tab />` component. |


### `TabList`
#### props
| Prop                                | Type       | Default                     | Description                                  |
| ----------------------------------- | ---------- | --------------------------- | -------------------------------------------- |
| `className` <br> _optional_         | `string`   | `a11y-react-tabs__tablist`  | Class name for the `<TabPanel />` component. |


### `Tab`
#### props
| Prop                                | Type        | Default                          | Description                             |
| ----------------------------------- | ----------- | -------------------------------- |---------------------------------------- |
| `disabled` <br> _optional_          | `boolean`   | `false`                          | Disable the tab if set to true.         |
| `className` <br> _optional_         | `string`    | `a11y-react-tabs__tab`           | Class name for the `<Tab />` component. |
| `selectedClassName` <br> _optional_ | `string`    | `a11y-react-tabs__tab--selected` | Class name for the active tab.          |
| `disabledClassName` <br> _optional_ | `string`    | `a11y-react-tabs__tab--disabled` | Class name for the disabled tab.        |


### `TabPanel`
#### props
| Prop                                | Type       | Default                                | Description                                 |
| ----------------------------------- | ---------- | -------------------------------------- |-----------------------------------------    |
| `className` <br> _optional_         | `string`   | `a11y-react-tabs__tab-panel`           | Class name for the`<TabPanel />` component. |
| `selectedClassName` <br> _optional_ | `string`   | `a11y-react-tabs__tab-panel--selected` | Class name for the active tab panel.        |

## Demo
* [Basic example](https://codesandbox.io/s/jkkqzxlp9)

## TODO:
* documentation
* usage example
* tests

## License
MIT

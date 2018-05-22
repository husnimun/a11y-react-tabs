# Simple React Tabs

Primitives to build simple and accessible React tabs component.

## Installation
```bash
npm install a11y-react-tabs
```

## Basic Example
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
TODO

### `TabList`
#### props
TODO

### `Tab`
#### props
TODO

### `TabPanel`
#### props
TODO

## TODO:
* documentation
* usage example
* tests

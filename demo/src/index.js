import React, { Component } from 'react'
import { render } from 'react-dom'
import { Tabs, TabList, Tab, TabPanel } from '../../src/index'

class Demo extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabPanel>
          Lorem ipsum dolor sit amet, cu mutat referrentur intellegebat sit, nam
          dico ignota impetus an, sit alienum invidunt consectetuer ne. Modo
          minim noster mea ex. His petentium efficiendi cu. Possim contentiones
          vis id, id quo fastidii philosophia, eum tempor eloquentiam no.
        </TabPanel>
        <TabPanel>
          Facer admodum ut eum, sed tale quaestio gloriatur no, te quando noster
          voluptua cum. Ei euismod phaedrum inimicus quo. Sea et posse impedit
          quaestio, eum audire facilis comprehensam ea. Eripuit intellegebat mel
          te, feugait volutpat temporibus te mei, vel ne vidit habeo debet.
        </TabPanel>
      </Tabs>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))

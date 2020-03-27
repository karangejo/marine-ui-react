import React, { Component } from 'react'

import {
          AnchorButton,
          BlowfishButton,
          CompassButton,
          BorderButton,
          CrabButton,
          DolphinButton,
          FishButton
        } from 'marine-ui-react'

export default class App extends Component {
  render () {
    return (
      <div style={{background: "#ff0"}}>
        <AnchorButton />
        <BlowfishButton/>
        <CompassButton/>
        <BorderButton/>
        <CrabButton/>
        <DolphinButton/>
        <FishButton/>
      </div>
    )
  }
}

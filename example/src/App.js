import React, { Component } from 'react'

import {
          AnchorButton,
          BlowfishButton,
          CompassButton,
          BorderButton,
          CrabButton,
          DolphinButton,
          FishButton,
          LobsterButton,
          OctopusButton
        } from 'marine-ui-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <AnchorButton />
        <BlowfishButton/>
        <CompassButton/>
        <BorderButton/>
        <CrabButton/>
        <DolphinButton/>
        <FishButton/>
        <LobsterButton/>
        <OctopusButton/>
      </div>
    )
  }
}

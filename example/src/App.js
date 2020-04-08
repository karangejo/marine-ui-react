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
          OctopusButton,
          SeahorseButton,
          SharkButton,
          ShellButton
        } from 'marine-ui-react'

export default class App extends Component {
  state= {
    btnSize: 1
  }

  entered = () => {
    this.setState({btnSize:3})
  }

  left = () => {
    this.setState({btnSize: 1})
  }

  render () {
    return (
      <div>
        <AnchorButton onMouseLeave={this.left} onMouseEnter={this.entered} size={this.state.btnSize}/>
        <BlowfishButton/>
        <CompassButton/>
        <BorderButton/>
        <CrabButton/>
        <DolphinButton/>
        <FishButton/>
        <LobsterButton/>
        <OctopusButton/>
        <SeahorseButton/>
        <SharkButton/>
        <ShellButton/>
      </div>
    )
  }
}

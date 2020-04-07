# marine-ui-react

> marine themed ui elements for react

[![NPM](https://img.shields.io/npm/v/marine-ui-react.svg)](https://www.npmjs.com/package/marine-ui-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save marine-ui-react
```

## Usage

```jsx
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
        <SeahorseButton/>
        <SharkButton/>
        <ShellButton/>
      </div>
    )
  }
}
```

Some props you can pass to the buttons are:

```jsx
size={1}
btnStyle={{your: "custom style"}}
width="20px"
backgroundColor="#ff0"
fontColor="#ff0"
fontFamily
fontSize
onClick
onMouseEnter
onMouseLeave
btnClassname
iconClassname
iconWidth
iconHeight
iconStyle
border
type
```

You also have access to an HOC wich you can pass your own svg to create a button.
The created button accepts all of the above props.

```jsx
import YourSVG  from './../mySvgReactComponent';
import ButtonHoc from 'marine-ui-react';
export default ButtonHoc(YourSVG);
```

just make sure the svg accepts conditional props like below:

```jsx
// within your svg component
width={props.width || "65%"}
height={props.height || "100%"}
style={{backgroundColor: ( props.backgroundColor|| "#fff")}}
className={props.iconClassName || "anchorIcon"}
```
There is also a responsive image component:

```jsx
import myImage from 'myImage.png';
import React, { Component } from 'react'

import {ResponsiveImage} from 'marine-ui-react'

export default class App extends Component {
  render () {
    return (
      <div>
        <ResponsiveImage src={myImage} width={myImageWidth} height={myImageHeight}/>
      </div>
    )
  }
}
```

## License

MIT © [karangejo](https://github.com/karangejo)

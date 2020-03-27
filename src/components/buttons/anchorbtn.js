import React, {useEffect, useState} from 'react';
import Icon from '../anchor';
//import {styles} from '../../styles';
import '../../styles.css';


function AnchorButton(props) {
  const [stateFontSize, setStateFontSize] = useState(props.fontSize || "13px");
  const [stateButtonWidth, setStateButtonWidth] = useState(props.width || "100px")
  const [btnStyle, setBtnStyle] = useState(props.btnStyle)

  useEffect(() => {

        const buttonWidth = (props.size*9 + parseInt(stateButtonWidth.replace(/px/,""))).toString() + "px"
        const buttonFontSize = (props.size + parseInt(stateFontSize.replace(/px/,""))).toString() + "px"
        console.log(buttonWidth);
        setBtnStyle({
                        fontFamily: (props.fontFamily || "Diplomata SC"),
                        background: (props.backgroundColor || "#fff"),
                        border: (props.border || "none"),
                        width: buttonWidth,
                        fontSize: buttonFontSize
                    }
                  );

  },[]);

  return (
      <button
        type={props.type || "button"}
        style={btnStyle}
        onClick={props.onClick || (() => console.log("onClick"))}
        className={props.btnClassName || "marineButton"}
        value={props.value || null}
        onMouseEnter={props.onMouseEnter || (() => console.log("entered"))}
        onMouseLeave={props.onMouseLeave || (() => console.log("entered"))}
      >
        <Icon
          align="center"
          backgroundColor={props.backgroundColor || "#fff"}
          fill={props.fill || "#000000"}
          width={props.iconWidth || "65%"}
          height={props.iconHeight || "100%"}
          style={props.iconStyle || null}
          className={props.iconClassName || "icon"}
        />
        <br/>
        {props.text || "Button"}
      </button>
  )
}

export default AnchorButton;

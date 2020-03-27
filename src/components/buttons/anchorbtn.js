import React, {useEffect, useState} from 'react';
import Icon from '../anchor';
import '../../styles.css';


function AnchorButton(props) {
  const [stateFontSize, setStateFontSize] = useState(props.fontSize || "13px");
  const [stateButtonWidth, setStateButtonWidth] = useState(props.width || "100px")
  const [btnStyle, setBtnStyle] = useState(props.btnStyle)

  useEffect(() => {
        let buttonWidth = "100px"

        let buttonFontSize = "13px"
        if(props.size){
          buttonWidth = (props.size*9 + parseInt(stateButtonWidth.replace(/px/,""))).toString() + "px"
          buttonFontSize = (props.size + parseInt(stateFontSize.replace(/px/,""))).toString() + "px"
        }

        setBtnStyle({
                        fontFamily: (props.fontFamily || "Diplomata SC"),
                        background: (props.backgroundColor || "#fff"),
                        border: (props.border || "none"),
                        width: buttonWidth,
                        fontSize: buttonFontSize,
                        color: (props.fontColor || "#000000")
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

import React, {useEffect, useState} from 'react';
import Icon from '../anchor';
//import {styles} from '../../styles';
import '../../styles.css';


function AnchorButton(props) {

  const [btnStyle, setBtnStyle] = useState(props.btnStyle)

  useEffect(() => {
        setBtnStyle({
                        fontFamily: (props.fontFamily || "Diplomata SC"),
                        background: (props.backgroundColor || "#fff"),
                        border: (props.border || "none"),
                        width:(props.width || "100px"),
                        fontSize: (props.fontSize || "13px")
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

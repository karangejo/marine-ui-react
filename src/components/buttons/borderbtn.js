import React from 'react';
import Icon from '../border';
import {styles} from '../../styles';
import '../../styles.css';

function BorderButton(props) {


  return (
      <button
        type={props.type || "button"}
        style={props.btnStyle || styles.btnStyle}
        onClick={props.onClick || (() => console.log("onClick"))}
        className={props.btnClassName || "marineButton"}
        value={props.value || null}
        onMouseEnter={props.onMouseEnter || (() => console.log("entered"))}
        onMouseLeave={props.onMouseLeave || (() => console.log("left"))}
      >
        <Icon
          align="center"
          fill={props.fill || "#000000"}
          width={props.iconWidth || "80%"}
          height={props.iconHeight || "100%"}
          style={props.iconStyle || null}
          className={props.iconClassName || "icon"}
        />
        <br/>
        {props.text || "Button"}
      </button>
  )
}

export default BorderButton;

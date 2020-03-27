import React from 'react';
import Icon from '../fish';
import {styles} from '../../styles';
import '../../styles.css';

function FishButton(props) {


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
          width={props.iconWidth || "110%"}
          height={props.iconHeight || "80%"}
          style={props.iconStyle || null}
          className={props.iconClassName || "icon"}
        />
        <br/>
        {props.text || "Button"}
      </button>
  )
}

export default FishButton;

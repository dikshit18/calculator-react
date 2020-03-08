import React from "react";
import Auxiliary from "../../../../hoc/Auxiliary/Auxiliary";
import classes from "./KeypadItem.module.css";

const keypadItem = props => {
  let pressedKey;
  switch (Number(props.keyPressCode)) {
    case 48:
      pressedKey = 0;
      break;
    case 49:
      pressedKey = 1;
      break;
    case 50:
      pressedKey = 2;
      break;
    case 51:
      pressedKey = 3;
      break;
    case 52:
      pressedKey = 4;
      break;
    case 53:
      pressedKey = 5;
      break;
    case 54:
      pressedKey = 6;
      break;
    case 55:
      pressedKey = 7;
      break;
    case 56:
      pressedKey = 8;
      break;
    case 57:
      pressedKey = 9;
      break;
  }

  return (
    <Auxiliary>
      {console.log("pressedKey", pressedKey)}
      {console.log("keyPressCode", props.keyPressCode)}
      {props.value === pressedKey ? (
        <input
          type="textbox"
          className={[classes.keypadItem, classes.hover].join(" ")}
          readOnly
          value={props.value}
        />
      ) : (
        <input
          type="textbox"
          className={classes.keypadItem}
          readOnly
          value={props.value}
        />
      )}
    </Auxiliary>
  );
};
export default keypadItem;

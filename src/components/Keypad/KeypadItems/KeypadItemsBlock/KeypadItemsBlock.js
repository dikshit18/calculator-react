import React from "react";
import KeypadItem from "../KeypadItem/KeypadItem";
import KeyCodeContext from "../../../../context/keyCode-context";

const keypadItemsBlock = props => {
  return (
    <div>
      {props.elements.map(element => {
        return (
          <KeypadItem
            keyPressCode={props.keyPressCode}
            value={element}
            key={element}
          ></KeypadItem>
        );
      })}
    </div>
  );
};
export default keypadItemsBlock;

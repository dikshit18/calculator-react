import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import KeypadItems from "./KeypadItems/KeypadItems";
const keypad = props => (
  <Auxiliary>
    {console.log("--", props.keyPressCode)}
    <KeypadItems keyPressCode={props.keyPressCode}></KeypadItems>
  </Auxiliary>
);

export default keypad;

import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Screen from "../../components/Screen/Screen";
import Keypad from "../../components/Keypad/Keypad";
import classes from "./Calculator.module.css";
import KeyCodeContext from "../../context/keyCode-context";
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressCode: 0
    };
  }
  render() {
    return (
      <div className={classes.Calculator}>
        {document.addEventListener("DOMContentLoaded", () => {
          "use strict";
          document.addEventListener("keydown", event => {
            const key = event.key.charCodeAt(0);
            if (key <= 57 && key >= 48) {
              this.setState({
                keyPressCode: key
              });
            }
          });
        })}
        <Screen />

        <Keypad />
      </div>
    );
  }
}
export default Calculator;

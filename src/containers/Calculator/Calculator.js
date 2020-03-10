import React, { Component } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import Screen from "../../components/Screen/Screen";
import Keypad from "../../components/Keypad/Keypad";
import classes from "./Calculator.module.css";
const allowedSymbols = ["+", "-", "*", "/", "%"];
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyPressCode: "",
      keyPressed: "",
      result: "",
      displayNumber: ""
    };
  }

  async calculateResult(stringExpression) {
    //const stringExpression = this.state.displayNumber;
    let result;
    try {
      result = Function(`'use strict'; return (${stringExpression})`)();
    } catch (e) {
      console.log("Iam here");
      const number = stringExpression;
      let res;
      try {
        res = Function(
          `'use strict'; return (${number.substring(0, number.length - 1)})`
        )();
      } catch (e) {}
      console.log("Res is", res);

      await this.setState({
        result: res
      });
    }
    this.setState({
      result
    });
  }

  clickButtonInitiator = text => {
    const displayNumber = this.state.displayNumber;
    const updatedDisplayNumber = displayNumber + text;
    this.setState({
      displayNumber: updatedDisplayNumber
    });
    this.calculateResult(updatedDisplayNumber);
  };

  clearState = async () => {
    await this.setState({
      keyPressCode: "",
      keyPressed: "",
      result: "",
      displayNumber: ""
    });
  };
  deleteLastItem = () => {
    const displayNumber = this.state.displayNumber;
    const updatedDisplayNumber = displayNumber.substring(
      0,
      displayNumber.length - 1
    );
    this.setState({
      displayNumber: updatedDisplayNumber
    });
    this.calculateResult(updatedDisplayNumber);
  };

  render() {
    return (
      <div className={classes.Calculator}>
        {document.addEventListener("DOMContentLoaded", () => {
          "use strict";
          let keys = [];
          // if (this.state.displayNumber.split("").length) {
          //   keys = this.state.displayNumber.split("");
          // }
          document.addEventListener("keypress", event => {
            const key = event.key;
            const keyCode = event.key.charCodeAt(0);
            if (
              (keyCode <= 57 && keyCode >= 48) ||
              allowedSymbols.includes(key)
            ) {
              keys.push(key);
              let displayNumber = this.state.displayNumber + keys.join("");
              this.setState({ displayNumber });
              this.calculateResult(displayNumber);
              keys = [];
            }
          });
        })}
        <Screen digit={this.state.displayNumber} result={this.state.result} />

        <Keypad
          keyPressCode={this.state.keyPressCode}
          keyPressed={this.state.keyPressed}
          clicked={this.clickButtonInitiator}
          clear={this.clearState}
          delete={this.deleteLastItem}
        />
      </div>
    );
  }
}
export default Calculator;

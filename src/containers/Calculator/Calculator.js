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
      digit: "",
      keyPressed: "",
      result: "",
      firstNumber: "",
      secondNumber: "",
      operator: ""
    };
  }

  getResult() {
    const firstNumber = Number(this.state.firstNumber);
    const secondNumber = Number(this.state.secondNumber);
    const operator = this.state.operator;
    let result;
    switch (operator.toString()) {
      case "/":
        result = firstNumber / secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
    }
    this.setState({
      result,
      firstNumber: result
    });
    console.log("Result is..", result);
    return result;
  }

  render() {
    return (
      <div className={classes.Calculator}>
        {document.addEventListener("DOMContentLoaded", () => {
          "use strict";
          let keys = [];
          document.addEventListener("keypress", event => {
            const key = event.key;
            const keyCode = event.key.charCodeAt(0);
            if (
              (keyCode <= 57 && keyCode >= 48) ||
              allowedSymbols.includes(key)
            ) {
              keys.push(key);
              this.setState({
                keyPressCode: key,
                digit: keys.join(""),
                keyPressed: key
              });
            }
            allowedSymbols.forEach(element => {
              if (this.state.digit.includes(element)) {
                const numbers = this.state.digit.split(element);
                const alreadyPresentResult = this.state.result;
                this.setState({
                  firstNumber: alreadyPresentResult || numbers[0],
                  secondNumber: numbers[1],
                  operator: element
                });
                if (this.state.secondNumber) this.getResult();
              }
            });
          });
        })}
        <Screen digit={this.state.digit} result={this.state.result} />

        <Keypad
          keyPressCode={this.state.keyPressCode}
          keyPressed={this.state.keyPressed}
          digit={this.state.digit}
        />
      </div>
    );
  }
}
export default Calculator;

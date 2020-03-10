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
      operator: "",
      displayNumber: ""
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
      firstNumber: result,
      operator: "",
      secondNumber: "",
      result
    });
    console.log("result", result);
    return result;
  }

  render() {
    return (
      <div className={classes.Calculator}>
        {document.addEventListener("DOMContentLoaded", () => {
          "use strict";
          let keys = [],
            counter = 0;
          document.addEventListener("keypress", event => {
            const key = event.key;
            const keyCode = event.key.charCodeAt(0);
            if (
              (keyCode <= 57 && keyCode >= 48) ||
              allowedSymbols.includes(key)
            ) {
              keys.push(key);
              let displayNumber = this.state.displayNumber;
              displayNumber += key;
              this.setState({ displayNumber });
            }
            allowedSymbols.forEach(element => {
              let digit = keys.join("");

              console.log("digit", digit);

              if (digit.includes(element)) {
                const numbers = digit.split(element);
                const result = this.state.result;
                const firstNumber = result || numbers[0];
                const secondNumber = numbers[1];
                // let buffer = secondNumber || 0;
                // buffer += secondNumber;
                console.log("FirstNo.", firstNumber);
                console.log("Second.", secondNumber);
                this.setState({
                  firstNumber,
                  secondNumber,
                  operator: element
                });
                if (secondNumber) {
                  this.getResult();
                  //counter++;
                  //if (counter === 3) {
                  keys = [];
                  keys.push(result || null);
                  //}
                  console.log(eval(this.state.displayNumber));
                }
              }
            });
          });
        })}
        <Screen digit={this.state.displayNumber} result={this.state.result} />

        <Keypad
          keyPressCode={this.state.keyPressCode}
          keyPressed={this.state.keyPressed}
          digit={this.state.result}
        />
      </div>
    );
  }
}
export default Calculator;

import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import classes from "./Button.module.css";
import { number } from "prop-types";
const operators = ["+", "/", "-", "*", "%"];
const togglers = ["AC", "DEL", "."];
const button = props => (
  <Auxiliary>
    <input
      type="text"
      className={[classes.Button, props.text === 0 ? classes.Zero : null].join(
        " "
      )}
      style={
        operators.includes(props.text)
          ? {
              backgroundColor: `rgb(247, 199, 41)`
            }
          : togglers.includes(props.text)
          ? { backgroundColor: `rgb(144,82,222)` }
          : null
      }
      value={props.text}
      readOnly
    ></input>
  </Auxiliary>
);
export default button;

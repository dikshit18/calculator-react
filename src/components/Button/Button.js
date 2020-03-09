import React, { useEffect } from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import classes from "./Button.module.css";
import { number } from "prop-types";
const operators = ["+", "/", "-", "*", "%"];
const togglers = ["AC", "DEL", "."];
const button = props => {
  return (
    <Auxiliary>
      <input
        type="text"
        pattern="^[0-9]*$"
        className={[
          classes.Button,
          props.text === 0 ? classes.Zero : null, //To add style for Zeroth key
          props.keyPressed && props.keyPressed == props.text //To Trigger key pressed updates
            ? classes.Focus
            : null
        ].join(" ")}
        //ToDo:
        //Try ref for this task of focusing

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
      />
    </Auxiliary>
  );
};
export default button;

import React from "react";
import Button from "../Button/Button";
import classes from "./Keypad.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
const numbers = [
  "AC",
  "DEL",
  ".",
  "+",
  1,
  2,
  3,
  "-",
  4,
  5,
  6,
  "%",
  7,
  8,
  9,
  "/",
  0,
  "*"
];

const keypad = props => {
  return (
    <Auxiliary>
      <div className={classes.Keypad}>
        {numbers.map(number => {
          return (
            <Button
              text={number}
              key={number}
              keyPressed={props.keyPressed}
              clicked={props.clicked}
              clear={props.clear}
              delete={props.delete}
            />
          );
        })}
      </div>
    </Auxiliary>
  );
};
export default keypad;

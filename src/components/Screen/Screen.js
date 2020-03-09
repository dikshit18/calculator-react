import React from "react";
import classes from "./Screen.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
const screen = props => (
  <Auxiliary>
    <div className={classes.Screen}>
      <input type="text" value={props.digit} className={classes.TextArea} />
      <input type="text" className={classes.TextArea} value={props.result} />
    </div>
  </Auxiliary>
);

export default screen;

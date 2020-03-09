import React from "react";
import classes from "./Screen.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
const screen = props => (
  <Auxiliary>
    <div className={classes.Screen}>
      <textarea readOnly value="hello <br>" className={classes.TextArea} />
    </div>
  </Auxiliary>
);

export default screen;

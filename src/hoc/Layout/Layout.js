import React from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Calculator from "../../containers/Calculator/Calculator";
import classes from "./Layout.module.css";
const layout = props => (
  <Auxiliary>
    <div className={classes.Layout}>
      <Calculator></Calculator>
    </div>
  </Auxiliary>
);

export default layout;

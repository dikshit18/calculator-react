import React from "react";
import KeypadItem from "./KeypadItem/KeypadItem";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import KeypadItemsBlock from "./KeypadItemsBlock/KeypadItemsBlock";
const firstRow = [1, 2, 3, "+"];
const secondRow = [4, 5, 6, "-"];
const thirdRow = [7, 8, 9, "/"];
const fourthRow = ["DEL", 0, "CE", "*"];

const keyPadItems = props => (
  <Auxiliary>
    <KeypadItemsBlock
      keyPressCode={props.keyPressCode}
      elements={firstRow}
    ></KeypadItemsBlock>
    <KeypadItemsBlock
      keyPressCode={props.keyPressCode}
      elements={secondRow}
    ></KeypadItemsBlock>
    <KeypadItemsBlock
      keyPressCode={props.keyPressCode}
      elements={thirdRow}
    ></KeypadItemsBlock>
    <KeypadItemsBlock
      keyPressCode={props.keyPressCode}
      elements={fourthRow}
    ></KeypadItemsBlock>
  </Auxiliary>
);
export default keyPadItems;

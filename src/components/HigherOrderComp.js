import React from "react";
import { useState } from "react";
const HigherOrderComp = (OriginalComponent, increaseCount) => {
  function NewComponent(props) {
    return (
      <OriginalComponent
        name="LogRocket"
        counter={props.counterValue}
        incrementCounter={() => props.setIncreaseCounter((size) => size + 1)}
      />
    );
  }
  return NewComponent;
};
export default HigherOrderComp;
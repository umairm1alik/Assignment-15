import { useState } from "react";
import HigherOrderComp from "../HigherOrderComp";
function ClickIncrease(props) {
  const { counter, incrementCounter } = props;
  return (
    <div>
      <p> Value of 'name' in ClickIncrease: {props.name}</p>
      <button onClick={() => incrementCounter()}>Increment counter</button>
      <p> Value of 'counter' in ClickIncrease: {counter}</p>
    </div>
  );
}
export default HigherOrderComp(ClickIncrease);
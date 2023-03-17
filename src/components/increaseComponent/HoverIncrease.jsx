import HigherOrderComp from "../HigherOrderComp";
function HoverIncrease(props) {
  const { counter, incrementCounter } = props;
  return (
    <div>
      <p>Value of 'name' in HoverIncrease: {props.name}</p>
      <button onMouseOver={() => incrementCounter()}>Increment counter</button>
      <p> Value of 'counter' in HowerIncrease: {counter}</p>
    </div>
  );
}

export default HigherOrderComp(HoverIncrease)
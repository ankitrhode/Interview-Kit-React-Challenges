import React, { useState } from "react";
import "./ReactSimpleCounter.css";

function ReactSimpleCounter() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter">
      <div className="counter__text">{count}</div>
      <div className="counter__button">
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default ReactSimpleCounter;

import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div className="window">
      <div className="Counter">
        <br />
        <br />
        <span className="value">Value = {count}</span>
        {/*When Calling a function do not use parentheses */}
        <div>
          <br />
          <button className="counterButton" onClick={increment}>
            Increment
          </button>
          <button className="counterButton" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Task 1</h1>
      <h2 className="counter-display">Count: {count}</h2>
      <div className="counter-buttons">
        <button className="counter-button" onClick={increment}>Increase</button>
        <button className="counter-button" onClick={decrement}>Decrease</button>
        <button className="counter-button reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;

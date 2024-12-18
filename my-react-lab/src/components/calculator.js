import React, { useState } from 'react';

function Calculator() {
  const [num, setNum] = useState();
  const [num2, setNum2] = useState();
  const [addition, setAdd] = useState();
  const [sub, setSub] = useState();
  const [mult, setMult] = useState();
  const [divide, setDivide] = useState();

  const Addition = () => {
    setAdd(Number(num) + Number(num2));
  };
  const Sub = () => {
    setSub(Number(num) - Number(num2));
  };
  const Multi = () => {
    setMult(Number(num) * Number(num2));
  };
  const Divide = () => {
    setDivide(Number(num) / Number(num2));
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">Task 2</h1>
      <h2 className="calculator-subtitle">Pair Programming</h2>
      <h1 className="calculator-header">Calculator</h1>
      <div className="calculator-inputs">
        <input
          className="calculator-input"
          type="number"
          placeholder="Enter first number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <input
          className="calculator-input"
          type="number"
          placeholder="Enter Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <div className="calculator-buttons">
        <button className="calculator-button" onClick={Addition}>Add</button>
        <button className="calculator-button" onClick={Sub}>Subtract</button>
        <button className="calculator-button" onClick={Multi}>Multiply</button>
        <button className="calculator-button" onClick={Divide}>Divide</button>
      </div>
      <div className="calculator-results">
        <h3 className="calculator-result">Addition: {addition}</h3>
        <h3 className="calculator-result">Subtract: {sub}</h3>
        <h3 className="calculator-result">Multiply: {mult}</h3>
        <h3 className="calculator-result">Divide: {divide}</h3>
      </div>
    </div>
  );
}

export default Calculator;


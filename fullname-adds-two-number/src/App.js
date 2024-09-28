import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null); // State to store the result

  const handleSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum); // Update the result state with the calculated sum
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Sum Calculator</h1>
      <div className="input-form">
        <input
          type="number"
          className="input-field"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
        />
        <input
          type="number"
          className="input-field"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
        />
      </div>
      <button className="submit-button" onClick={handleSum}>
        Calculate Sum
      </button>
      {result !== null && ( // Display result only if it's not null
        <p className="output-text">Sum: {result}</p>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import './rollingDice.css'
import Die from './Die';

const RollingDice = () => {
  const generateDice = (quantity) =>
    Array.from({ length: quantity },
      () => Math.ceil(Math.random() * 6)
    );


  const [numDice, setNumDice] = useState(1);
  const [diceValues, setDiceValues] = useState(generateDice(1));


  const handleSubmit = (e) => {
    e.preventDefault();
    setDiceValues(generateDice(numDice));
  };

  return (
    <div className="container">
      <form className="dice-form" onSubmit={handleSubmit}>
        <label>
          Number of dice
          <input
            type="number"
            min="1"
            max="99"
            value={numDice}
            onChange={(e) => setNumDice(Number(e.target.value))}
          />
        </label>
        <button type="submit">Roll</button>
      </form>
      <div className="dice-container">
        {
          diceValues.map((value, index) => (
            <Die key={index} value={value} />
          ))
        }
      </div>
    </div>
  );
};

export default RollingDice;
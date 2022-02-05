import React, { useState } from "react";
import "./index.css"

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  const [saved, setSaved] = useState([]);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
 
  const handleSave = () => {
    const data = {
      date: new Date().toLocaleDateString("en-US"),
      count: counter
    }

    setSaved([
      ...saved,
      data
    ]);
    setCounter(0);
  }

  return (
    <div className="container">
      <span className="title">Passanger count</span>
      <span className="counter">{counter}</span>
      <button className="button" onClick={handleIncrement}>Increment</button>
      <button className="button" onClick={handleSave}>Save</button>
      <div className="saved-warapper">
        {saved.map((s, index) => (
          <h2 key={index} className="saved">{`${s.date} - ${s.count}`}</h2>
        ))}
      </div>
    </div>
  );
};

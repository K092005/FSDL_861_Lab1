import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (val) => {
    setInput(input + val);
  };

  const clear = () => {
    setInput("");
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "C", "⌫", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".", 
  ];

  return (
    <div className="card calc">
      <h2>Calculator</h2>

      <input className="display" value={input} readOnly />

      <div className="grid">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "C") clear();
              else if (btn === "⌫") backspace();
              else if (btn === "=") calculate();
              else handleClick(btn);
            }}
            className={btn === "=" ? "equal" : ""}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
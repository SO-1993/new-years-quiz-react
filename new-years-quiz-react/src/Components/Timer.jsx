// Manages countdown for questions

import React from "react";
import { useState, useEffect } from "react";

const Timer = ({ initialTime = 30, onTimeUp }) => {
  const [counter, setCounter] = useState(initialTime);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      if (onTimeUp) onTimeUp();
    }
  }, [counter, onTimeUp]);

  return (
    <div className="countdown-timer-container">
      <div>Countdown: {counter}</div>
    </div>
  );
};

export default Timer;

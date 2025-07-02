import React from "react";

import { useState, useEffect } from 'react';

export default function ExampleCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}


import React, { useState, useEffect } from "react";

const SecondCount = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Second counter: {seconds}</h2>
    </div>
  );
};

export default SecondCount;

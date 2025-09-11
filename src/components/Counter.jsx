import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Update document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ 
            backgroundColor: "#333",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px 20px", 
            fontSize: "16px" 
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

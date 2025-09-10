import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>React Events Practice</h1>

      <h2>Button Click Event</h2>
      <button onClick={handleClick}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default App;

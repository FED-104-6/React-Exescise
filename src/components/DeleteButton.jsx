import { useState } from 'react';

function DeleteButton() {
  const [text, setText] = useState("Hello, I am here!");

  const handleDelete = () => {
    setText(""); //delete text
  };

  return (
    <div style={{ padding: "20px" }} >
      <p>{text}</p>
      <button onClick={handleDelete}
        style={{
            backgroundColor: "#333",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "8px 16px",
            cursor: "pointer"
        }}>
        Delete</button>
    </div>
  );
}

export default DeleteButton;

import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

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
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",  
            justifyContent: "center",
            textAlign: "center", 
            gap: "5px"
        }}
      >
        <DeleteIcon fontSize="small" />Delete
      </button>
    </div>
  );
}

export default DeleteButton;

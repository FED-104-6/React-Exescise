import React from "react";

const Header = ({ setPage }) => {
  return (
    <header
      style={{
        position: "fixed",     
        top: "10px",          
        right: "10px",
        left: "10px",
        background: "#333",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "20px", cursor: "pointer" }}
      onClick={() => setPage("home")}
      >
        React Exercise
      </h1>

      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "8px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <button
              onClick={() => setPage("exercise0909")}
              style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
            >
              Exercise0909
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("exercise0910")}
              style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
            >
              Exercise0910
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("exercise0911")}
              style={{ color: "white", background: "none", border: "none", cursor: "pointer" }}
            >
              Exercise0911
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

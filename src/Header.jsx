import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        right: "10px",
        background: "#333",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        zIndex: 1000
      }}
    >
      {/* 點擊標題回到 Home */}
      <h1 style={{ margin: 0, fontSize: "20px", cursor: "pointer" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          React Exercise
        </Link>
      </h1>

      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/exercise0909" style={{ color: "white", textDecoration: "none" }}>
              Exercise0909
            </Link>
          </li>
          <li>
            <Link to="/exercise0910" style={{ color: "white", textDecoration: "none" }}>
              Exercise0910
            </Link>
          </li>
          <li>
            <Link to="/exercise0911" style={{ color: "white", textDecoration: "none" }}>
              Exercise0911
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

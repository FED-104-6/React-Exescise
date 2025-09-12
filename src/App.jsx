import { useState } from "react";
import './App.css'
import Header from "./Header";
import Exercise0909 from './header/Exescise0909' 
import Exercise0910 from './header/Exescise0910'
import Exercise0911 from './header/Exescise0911'

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header setPage={setPage} />

      {page === "home" && (
        <div style={{ padding: "30px", fontSize: "20px", textAlign: "center" }}>
          <h1>Hello!</h1> 
          <p>Please click on the date above to view.</p>
        </div>
      )}

      {page === "exercise0909" && <Exercise0909 />}
      {page === "exercise0910" && <Exercise0910 />}
      {page === "exercise0911" && <Exercise0911 />}
    </>
  )
}

export default App
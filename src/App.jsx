import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./Header";
import Exercise0909 from './header/Exescise0909' 
import Exercise0910 from './header/Exescise0910'
import Exercise0911 from './header/Exescise0911'

function Home() {
  return (
    <div style={{ padding: "30px", fontSize: "20px", textAlign: "center", marginTop: "80px" }}>
      <h1>Hello!</h1> 
      <p>Please click on the date above to view.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise0909" element={<Exercise0909 />} />
        <Route path="/exercise0910" element={<Exercise0910 />} />
        <Route path="/exercise0911" element={<Exercise0911 />} />
      </Routes>
    </Router>
  )
}

export default App;

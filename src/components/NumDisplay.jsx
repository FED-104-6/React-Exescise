import { useState, useContext } from "react";
import NumContext from "../components/NumContext";


function NumberDisplay() {
  const [num, setNum] = useState(0);

  return (
    <NumContext.Provider value={{num, setNum}} >
      <ChildComponent />
    </NumContext.Provider>
  )

}

function ChildComponent() {
  const { num, setNum } = useContext(NumContext);

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}

export default NumberDisplay;
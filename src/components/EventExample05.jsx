import {useState} from 'react';

function EventExample05() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {setCount(5)}}>set count to 5</button>
    </div>
  );

}

export default EventExample05;
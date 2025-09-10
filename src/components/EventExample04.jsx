import { useState } from 'react';

function EventExample04() {
  const [name, setName] = useState('...');
  const handleClick = (newName) => {
    setName(name === '...' ? 'Wendy' : '...');
  }

  return(
    <div>
      <p>My name is {name}</p>
      <button onClick={() => {handleClick('Wendy')}}>Update Name</button>
    </div>
  )
}

export default EventExample04;
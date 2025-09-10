function EventExample03() {
    const handleClick = (name, e) => {
      alert(name);
      console.log(`This event was triggered by a ${e.type} event}`);
    }
  
    return (
      <p onClick={(event) => handleClick('Wendy', event)}>My name is ...</p>
    );
  }
  
  export default EventExample03;
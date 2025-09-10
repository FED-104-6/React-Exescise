function EventExample01() {
    const handleClick = () => {
      alert("Wendy");
    }
  
    return(
        <p onClick={handleClick}>My name is ...</p>
    );
  }
  
  export default EventExample01;
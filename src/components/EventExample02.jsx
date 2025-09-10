function EventExample02() {
    const handleClick = (name) => {
      alert(name);
    }
  
    return(
        <p onClick={() => handleClick('Wendy')}>My name is ...</p>
    )
  }
  
  export default EventExample02;
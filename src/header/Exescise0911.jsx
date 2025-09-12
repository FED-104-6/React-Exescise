import { useContext } from 'react';
import CreateContext, { UserContext } from '../components/CreateContext';
import NumDisplay from '../components/NumDisplay';

function Component1() {
  const value = useContext(UserContext);
  return <p>Hi, {value.name}!</p>; 
}

function Component2() {
  return (
    <>
      <Component1 />
      <UserContext.Consumer>
        {(value) => <p>Yo, {value.name}!</p>}
      </UserContext.Consumer>
    </>
  );
}

function Exercise0911() {
  return (
    <>
      <UserContext.Provider value={{ name: "World", email: "", age: 0 }}>
        <Component2 />
      </UserContext.Provider>
      <hr />
      <CreateContext />
      <hr />
      <NumDisplay />
    </>
  );
}

export default Exercise0911;

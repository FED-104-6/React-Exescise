import React, { createContext, useContext } from "react";

export const UserContext = createContext(); 

const initialUser = {
  name: "Wendy Tai",
  email: "daiweiru0931@google.com",
  age: 30,
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={initialUser}>
      {children}
    </UserContext.Provider>
  );
};

const UserDisplay = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h3>User Data</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
};

const CreateContext = () => {
  return (
    <UserProvider>
      <UserDisplay />
    </UserProvider>
  );
};

export default CreateContext;

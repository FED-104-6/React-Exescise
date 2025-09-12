# React Events

To create this repository, here is what I did:

```
mkdir ReactEvents
cd ReactEvents
npm create vite@latest ../ReactEvents -- --template react
```

## Initialize Git Repository. 
  
```
git init
git add -A
git commit -m 'Init Commit: 
  Sets up React App to go over React Events exercises

  - Adds Readme
  - Adds Vite React App
  - Adds .gitignore
'
```

## Read the fine manual

[React Docs](https://react.dev/learn/responding-to-events)


# Context Example

[`useContext`](https://react.dev/reference/react/useContext) is a React hook that allows you to read and subscribe to context from your component.  
  
## Create the Context
```js
// UserContext.js
import {createContext} from 'react';

const UserContext = createContext();

export default UserContext;
```

## Provide the Context
```js
// App.js
import UserContext from './UserContext';

function App() {
  const user = {
    name: 'Drew',
    email: 'drew@example.com',
  };

  return (
    <UserContext.Provider value={user}>
      <Profile />
    </UserContext.Provider>
  );
}

export default App;
```

## Consume the Context
```js
// Profile.js
import UserContext from './UserContext';

function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

export default Profile;
```
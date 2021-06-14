import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const onAddUser = (name, age) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name, age }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

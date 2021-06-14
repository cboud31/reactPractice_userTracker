import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = ({ onAddUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addUser = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 && age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
    }
    onAddUser(username, age);
    setUsername('');
    setAge('');
  };

  const usernameChange = (event) => {
    setUsername(event.target.value);
  };

  const ageChange = (event) => {
    setAge(event.target.value);
  };

  const confirmError = () => setError(null);

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          confirmError={confirmError}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUser}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChange}
          />
          <label htmlFor="age">Age</label>
          <input id="age" type="number" value={age} onChange={ageChange} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;

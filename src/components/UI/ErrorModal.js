import React from 'react';

import Card from './Card';
import Button from './Button';

import classes from './Error.module.css';

const ErrorModal = ({ title, message, confirmError }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={confirmError} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={confirmError}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;

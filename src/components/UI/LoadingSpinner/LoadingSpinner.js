import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes["loader-container"]}>
      <div className={classes.loader}></div>
    </div>
  );
};

export default LoadingSpinner;

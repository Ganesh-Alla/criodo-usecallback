import React, { useEffect } from 'react';

const Child2 = ({ withoutCallback, withCallback }) => {
  // Detect when function references change
  useEffect(() => {
    console.log('Function without useCallback reference changed');
  }, [withoutCallback]);

  useEffect(() => {
    console.log('Function with useCallback reference changed');
  }, [withCallback]);

  console.log('Child component rendered');

  return (
    <div>
      <button onClick={withoutCallback}>Increment (Without useCallback)</button>
      <button onClick={withCallback}>Increment (With useCallback)</button>
    </div>
  );
};

export default Child2;

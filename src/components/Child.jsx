import React from 'react'


// Child Component: Receives a IncrementCount function as a prop
const Child = ({ handleClick }) => {
  console.log(`Increment Component rendered`);  // Log when Child is re-rendered
  return (
    <div>
      <button onClick={handleClick}>Increment (Child)</button>
    </div>
  );
};

export default Child
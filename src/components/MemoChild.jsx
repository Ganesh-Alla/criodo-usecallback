import React from 'react'


// Child Component: Receives a IncrementCount function as a prop
const Child = ({ handleClick }) => {
  console.log(`Increment Component rendered (Child)`);  // Log when Child is re-rendered
  return (
    <div>
      <button onClick={handleClick}>Increment (Child)</button>
    </div>
  );
};

export default React.memo(Child) // Wrapped with Memo (Memoize the component)
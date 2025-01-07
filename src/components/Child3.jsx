import React, { memo } from 'react'


// Child Component: Receives a function and label as a props
const Child = ({ increment, label }) => {
  console.log(`${label} Component rendered`);  // Log when Child is re-rendered
  return (
    <div>
      <button onClick={increment}>{label} (Child)</button>
    </div>
  );
};

export default memo(Child)
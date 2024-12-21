import React from 'react'


// Child Component: Receives a function as a prop
const Child = ({ onClick }) => {
  console.log("Child re-rendered");  // Log when child is re-rendered
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export default Child
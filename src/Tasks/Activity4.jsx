import React, { useState, useCallback } from 'react';

const Activity4 = () => {
  const [count, setCount] = useState(0);

  // Without dependency array, the function is recreated on every render
  const handleClickWithoutDeps = useCallback(() => {
    console.log("Button clicked, count is:", count);
  }); // No dependency array -> recreated on every render

  return (
    <div>
      <h2>4. User understands the need of dependency array in useCallback Hook.</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <div>
        <h3>Handle Click Without Dependency Array:</h3>
        <button onClick={handleClickWithoutDeps}>Click Without Deps</button>
      </div>
    </div>
  );
};

export default Activity4
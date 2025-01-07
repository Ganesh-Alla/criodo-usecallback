import React, { useCallback, useState } from 'react'
import Child from '../components/Child';

const EPO2 = () => {
    // Parent states (count and multiplier)
    const [count, setCount] = useState(1);
    const [multiplier, setMultiplier] = useState(1);

     // Function without useCallback (re-created on every render)
  const incrementWithoutCallback = () => {
    console.log('Increment without useCallback called');
    setCount((prev) => prev + 1);
  };

  // Function with useCallback (memoized)
  const incrementWithCallback = useCallback(() => {
    console.log('Increment with useCallback called');
    setCount((prev) => prev + 1);
  }, []);
    

    console.log("Parent Component rendered");  // Log when parent is rendered

  return (
    <>
    <h1> Count: {count} </h1>
    <Child
        withoutCallback={incrementWithoutCallback}
        withCallback={incrementWithCallback}
      />
      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
        placeholder="Type something"
      />
  </>
  )
}

export default EPO2
import React, { useCallback, useEffect, useState } from 'react'
import Child from '../components/Child3';

const EPO5 = () => {
    // Parent state (count and text)
    const [count, setCount] = useState(1);
    const [multiplier, setMultiplier] = useState(1);

    const IncrementCount = useCallback(() => {
      console.log("Increment function called");
      setCount((prevCount) => prevCount + 1);
    },[]);
    
    const MultiplyCount = useCallback(() => {
      console.log("Multiplier function called with " + multiplier);
      setCount((prevCount) => prevCount * multiplier);
    },[multiplier]);

  useEffect(() => {
    console.log("IncrementCount reference changed");
  }, [IncrementCount]); // Dependency on handleClick

  useEffect(() => {
    console.log("MultiplyCount reference changed");
  }, [MultiplyCount]); // Dependency on handleClick

    console.log("Parent Component rendered");  // Log when parent is rendered

  return (
    <>
    <h1> Count: {count} </h1>

    <Child increment={IncrementCount} label="Increment" />
    <Child increment={MultiplyCount} label="multiply" />

      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
        placeholder="Type something"
      />
  </>
  )
}

export default EPO5
import React, { useCallback, useEffect, useState } from 'react'
import Child from '../components/Child3';

const ELO4 = () => {
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
    });

  useEffect(() => {
    console.log("IncrementCount reference changed");
  }, [IncrementCount]); // check reference change for IncrementCount

  useEffect(() => {
    console.log("MultiplyCount reference changed");
  }, [MultiplyCount]); // check reference change for MultiplyCount

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

export default ELO4
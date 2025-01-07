import React, { useCallback, useEffect, useState } from 'react'
import Child from '../components/Child';

const EPO21 = () => {
    // Parent states (count and multiplier)
    const [count, setCount] = useState(1);
    const [multiplier, setMultiplier] = useState(1);

    //re-created on every render
    const IncrementCount = useCallback(() => {
      console.log("Increment function called");
      setCount((prevCount) => prevCount + 1);
    },[]);
    
  useEffect(() => {
    console.log("IncrementCount reference changed");
  }, [IncrementCount]); //  check reference change

    console.log("Parent Component rendered");  // Log when parent is rendered

  return (
    <>
    <h1> Count: {count} </h1>
    <Child handleClick={IncrementCount} />
      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
        placeholder="Type something"
      />
  </>
  )
}

export default EPO21
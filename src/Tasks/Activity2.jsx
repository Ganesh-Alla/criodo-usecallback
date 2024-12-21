import React, { useCallback, useState } from 'react'
import Child from '../components/Child';

const Activity2 = () => {
      // Parent state (count)
  const [count, setCount] = useState(0);

  // Memoize the handleClick function using useCallback
  const handleClick = useCallback(() => {
    console.log("Button clicked in Parent");
  }, []);  // No dependencies, so it won't change across renders

  console.log("Parent re-rendered");  // Log when parent is re-rendered
  return (
    <div>
    <h2>2.User should be able to use useCallback() to avoid function reference change when a component re-renders.</h2>
    <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* Pass memoized handleClick function to the child */}
      <Child onClick={handleClick} />
  </div>
  )
}

export default Activity2
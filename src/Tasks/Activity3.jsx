import React, { useCallback, useState } from 'react'
import MemoChild from '../components/MemoChild';

const Activity3 = () => {
          // Parent state (count)
      const [count, setCount] = useState(0);
    
      // Memoize the handleClick function using useCallback
      const handleClick = useCallback(() => {
        console.log("Button clicked in Parent");
      }, []);  // No dependencies, so it won't change across renders
    
      console.log("Parent re-rendered");  // Log when parent is re-rendered
  return (
    <div>
    <h2>3.User should be able ot use React.Memo() along with useCallback() to resolve the unnecessary re-render issue.</h2>
    <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      {/* Pass memoized handleClick function to the child */}
      <MemoChild onClick={handleClick} />
  </div>
  )
}

export default Activity3
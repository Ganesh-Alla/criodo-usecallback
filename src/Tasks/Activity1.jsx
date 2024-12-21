import React, { useState } from 'react'
import Child from '../components/Child'

const Activity1 = () => {
    // Parent state (count)
    const [count, setCount] = useState(0);

    // Function that will be passed to the child
    const handleClick = () => {
      console.log("Button clicked in Parent");
    };
  
    console.log("Parent re-rendered");  // Log when parent is re-rendered
  return (
    <div>
    <h2>1.User understands that in scenarios when child component has functions passed as prop, child components gets re-rendered unnecessarily when parent re-renders, due to the function reference changing.</h2>
    <h1>Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment Count</button>
    {/* Pass handleClick function to the child */}
    <Child onClick={handleClick} />
  </div>
  )
}

export default Activity1
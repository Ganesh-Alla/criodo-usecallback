import React, { useCallback, useState } from 'react'

const Activity5 = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('John');
  
    // Memoized function with a dependency array, only updates when `count` changes
    const handleClickWithCount = useCallback(() => {
      console.log("Button clicked, count is:", count);
    }, [count]); // Dependency on `count`
  
    // Memoized function with a dependency array, only updates when `name` changes
    const handleClickWithName = useCallback(() => {
      console.log("Button clicked, name is:", name);
    }, [name]); // Dependency on `name`
  
    return (
      <div>
        <h2>5. User should be able to use dependency array with useCallback.</h2>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
  
        <h1>Name: {name}</h1>
        <button onClick={() => setName(name === 'Ganesh' ? 'Tarun' : 'Ganesh')}>Toggle Name</button>
  
        <div>
          <h3>Handle Click with Count Dependency:</h3>
          <button onClick={handleClickWithCount}>Click with Count</button>
        </div>
  
        <div>
          <h3>Handle Click with Name Dependency:</h3>
          <button onClick={handleClickWithName}>Click with Name</button>
        </div>
      </div>
    );
  };

export default Activity5
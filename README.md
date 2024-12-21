# React Optimization with useCallback and React.memo

This repository demonstrates how to prevent unnecessary re-renders in React using hooks like `useCallback`, `React.memo`, and the importance of the dependency array in `useCallback`.

## Expected Learning Outcomes

1. **User understands that in scenarios when a child component has functions passed as props, the child component gets re-rendered unnecessarily when the parent re-renders due to the function reference changing.**
2. **User should be able to use `useCallback()` to avoid function reference change when a component re-renders.**
3. **User should be able to use `React.memo()` along with `useCallback()` to resolve the unnecessary re-render issue.**
4. **User understands the need for the dependency array in the `useCallback` Hook.**
5. **User should be able to use the dependency array with `useCallback` to prevent unnecessary re-creations of functions.**

## Activities and Use Cases

### Activity 1: Child Component Re-renders Due to Function Reference Change

#### File: `src/Tasks/Activity1.jsx`

```jsx
import React, { useState } from 'react';

const Child = ({ onClick }) => {
  console.log("Child re-rendered");  // Log when child is re-rendered
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

const Activity1 = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked in Parent");
  };

  console.log("Parent re-rendered");  // Log when parent is re-rendered
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Activity1;

# React Optimization with useCallback and React.memo

This repository demonstrates how to prevent unnecessary re-renders in React using hooks like `useCallback`, `React.memo`, and the importance of the dependency array in `useCallback`.

## Expected Learning Outcomes

1. **User understands that in scenarios when a child component has functions passed as props, the child component gets re-rendered unnecessarily when the parent re-renders due to the function reference changing.**
2. **User should be able to use `useCallback()` to avoid function reference change when a component re-renders.**
3. **User should be able to use `React.memo()` along with `useCallback()` to resolve the unnecessary re-render issue.**
4. **User understands the need for the dependency array in the `useCallback` Hook.**
5. **User should be able to use the dependency array with `useCallback` to prevent unnecessary re-creations of functions.**


<!-- ## Activities and Use Cases

### ELO 1: Child Component Re-renders Due to Function Reference Change

#### File: `src/Tasks/ELO1.jsx`

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
```

### Activity 2: Use useCallback to Prevent Function Reference Change
#### File: src/Tasks/Activity2.jsx
```jsx
Copy code
import React, { useCallback, useState } from 'react';

const Child = ({ onClick }) => {
  console.log("Child re-rendered");  // Log when child is re-rendered
  return (
    <div>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

const Activity2 = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked in Parent");
  }, []);  // Memoized function with no dependencies

  console.log("Parent re-rendered");  // Log when parent is re-rendered
  return (
    <div>
      <h2>2. User should be able to use useCallback() to avoid function reference change when a component re-renders.</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <Child onClick={handleClick} />
    </div>
  );
};

export default Activity2;
```

### Activity 3: Use React.memo() to Resolve Unnecessary Re-renders
#### File: src/Tasks/Activity3.jsx
```jsx
Copy code
import React, { useCallback, useState, memo } from 'react';

const MemoChild = memo(({ onClick }) => {
  console.log("MemoChild re-rendered");
  return (
    <div>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
});

const Activity3 = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked in Parent");
  }, []);  // Memoized function with no dependencies

  console.log("Parent re-rendered");  // Log when parent is re-rendered
  return (
    <div>
      <h2>3. User should be able to use React.Memo() along with useCallback() to resolve the unnecessary re-render issue.</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <MemoChild onClick={handleClick} />
    </div>
  );
};

export default Activity3;
```
### Activity 4: Understanding the Need for a Dependency Array in useCallback
#### File: src/Tasks/Activity4.jsx
```jsx
Copy code
import React, { useState, useCallback } from 'react';

const Activity4 = () => {
  const [count, setCount] = useState(0);

  // Without dependency array, the function is recreated on every render
  const handleClickWithoutDeps = useCallback(() => {
    console.log("Button clicked, count is:", count);
  });

  return (
    <div>
      <h2>4. User understands the need for the dependency array in useCallback Hook.</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <div>
        <h3>Handle Click Without Dependency Array:</h3>
        <button onClick={handleClickWithoutDeps}>Click Without Deps</button>
      </div>
    </div>
  );
};

export default Activity4;
```

### Activity 5: Using the Dependency Array with useCallback
#### File: src/Tasks/Activity5.jsx
```jsx
Copy code
import React, { useCallback, useState } from 'react';

const Activity5 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  const handleClickWithCount = useCallback(() => {
    console.log("Button clicked, count is:", count);
  }, [count]); // Dependency on `count`

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

export default Activity5;
``` -->

### Note: 
This `Repository` provides an overview of the activities and their related code snippets, explaining key React concepts related to optimization.

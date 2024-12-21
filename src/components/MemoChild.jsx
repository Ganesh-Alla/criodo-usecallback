import React, { memo } from 'react';

// Wrap Child with memo to prevent unnecessary re-renders
const MemoChild = memo(({ onClick }) => {
    console.log("MemoChild re-rendered");
    return (
      <div>
        <button onClick={onClick}>Click Me</button>
      </div>
    );
  });

export default MemoChild;

The solution is to use a functional update with `setState`. This ensures that the update is always based on the most recent state.  The functional update takes a callback function that receives the previous state as an argument and returns the new state. This guarantees that the update is based on the latest state, avoiding unexpected behavior.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const incrementAsync = () => {
    setTimeout(() => {
      // Correct way to update state asynchronously:
      setCount(prevCount => prevCount + 1);
    }, 100);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementAsync}>Increment (Async)</button>
    </div>
  );
}

export default Counter;
```
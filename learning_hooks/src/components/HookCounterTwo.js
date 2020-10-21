import React, { useState } from "react";

// updating state with previous state value
export function HookCounterTwo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Count:{count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click
      </button>
    </div>
  );
}

import React, { useState } from "react";

export function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

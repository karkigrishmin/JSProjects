import React, { useState, useEffect } from "react";

export function HookCounterFour() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //   useEffect runs after every render, so we use second parameter array to conditionally  run useEffect
  //second parameter of useEffect, which is array decides whether to run useEffect or not according to count value
  useEffect(() => {
    console.log("count updates");
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Click {count} time</button>
    </div>
  );
}

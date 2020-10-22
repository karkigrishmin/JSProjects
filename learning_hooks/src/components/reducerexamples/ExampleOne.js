import React, { useReducer } from "react";

const initialState = 0;

// Reducer funtion which takes current state and action as a parameter
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export function ExampleOne() {
  // useReducer returns newState
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}

import React, { useReducer, useContext } from "react";
import { HookCounter } from "./components/HookCounter";
import { HookCounterTwo } from "./components/HookCounterTwo";
import { HookCounterThree } from "./components/HookCounterThree";
import { HookCounterArray } from "./components/HookCounterArray";
import { HookCounterFour } from "./components/HookCounterFour";
import { ExampleOne } from "./components/reducerexamples/ExampleOne";
import { ExampleTwo } from "./components/reducerexamples/ExampleTwo";
import { ComponentA } from "./components/ComponentA";
import { ComponentB } from "./components/ComponentB";
import { ComponentC } from "./components/ComponentC";
import "./App.css";

//creating context
export const CountContext = React.createContext();

// initial state
const initialState = 0;

// reducer function
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

function App() {
  //  useReducer
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterArray />
      <HookCounterFour />
      <ExampleOne />
      <ExampleTwo />
      <CountContext.Provider
        value={{ countState: count, countDispatch: dispatch }}
      >
        <h1>Count: {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider>
    </div>
  );
}

export default App;

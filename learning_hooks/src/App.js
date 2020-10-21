import React from "react";
import { HookCounter } from "./components/HookCounter";
import { HookCounterTwo } from "./components/HookCounterTwo";
import { HookCounterThree } from "./components/HookCounterThree";
import { HookCounterArray } from "./components/HookCounterArray";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterArray />
    </div>
  );
}

export default App;

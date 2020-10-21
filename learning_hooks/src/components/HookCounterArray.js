import React, { useState } from "react";

export function HookCounterArray() {
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length, text: Math.floor(Math.random() * 6) + 1 },
    ]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text} </li>
        ))}
      </ul>
    </div>
  );
}

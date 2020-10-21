import React, { useState } from "react";

export function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <input
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <input
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />

      <p>firstname: {name.firstname}</p>
      <p>lastname: {name.lastname}</p>
      {JSON.stringify(name)}
    </div>
  );
}

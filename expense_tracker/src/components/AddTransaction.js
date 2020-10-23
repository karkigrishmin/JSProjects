import React, { useState } from "react";

export function AddTransaction() {
  const [text, setText] = useState("");
  const [amt, setAmt] = useState(0);

  return (
    <div className="add-transaction">
      <div className="text-field">
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="amt-field">
        <label htmlFor="amt">Amount:</label>
        <input
          id="amt"
          type="number"
          value={amt}
          onChange={(e) => setAmt(e.target.value)}
        />
      </div>
      <button>Add transaction</button>
    </div>
  );
}

import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100),
      text,
      // input amount is string so parsing it to number, we can use parseInt() too
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div className="add-transaction">
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Text:</label>
        <input
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <label htmlFor="amt">Amount:</label>
        <input
          id="amt"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button>Add transaction</button>
      </form>
    </div>
  );
}

import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`;

const Button = styled.button`
  margin-top: 0.8rem;
`;

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

    if (text !== "" && amount !== "") {
      addTransaction(newTransaction);
    }
  };

  return (
    <div className="add-transaction">
      <form onSubmit={onSubmit}>
        <FormWrapper>
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
          <Button>Add transaction</Button>
        </FormWrapper>
      </form>
    </div>
  );
}

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export function TransactionList() {
  // useContext->returns provided value
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="history">
      <h6>History</h6>
      <ul>
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            text={transaction.text}
            amt={transaction.amount}
          />
        ))}
      </ul>
    </div>
  );
}

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  console.log(total);

  return (
    <div className="text">
      <h6>Your Balance</h6>
      <div className="amt">
        <p>Rs{total}</p>
      </div>
    </div>
  );
}

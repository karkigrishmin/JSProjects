import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amt) => amt > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense =
    amounts.filter((amt) => amt < 0).reduce((acc, item) => (acc += item), 0) *
    -(1).toFixed(2);

  return (
    <div className="income-expense">
      <div className="income">
        <h6>Income</h6>
        <div className="amt">
          <p>Rs{income}</p>
        </div>
      </div>
      <div className="expense">
        <h6>Expense</h6>
        <div className="amt">
          <p>Rs{expense}</p>
        </div>
      </div>
    </div>
  );
}

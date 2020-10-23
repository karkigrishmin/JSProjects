import React from "react";

export function IncomeExpense() {
  return (
    <div className="income-expense">
      <div className="income">
        <h6>Income</h6>
        <div className="amt">
          <p>Rs10000</p>
        </div>
      </div>
      <div className="expense">
        <h6>Expense</h6>
        <div className="amt">
          <p>Rs500</p>
        </div>
      </div>
    </div>
  );
}

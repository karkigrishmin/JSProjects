import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledIncome = styled.div`
  color: green;
`;

const StyledExpense = styled.div`
  color: red;
`;

const IncomeHeader = styled.h4`
  margin-bottom: 0;
`;

const ExpenseHeader = styled.h4`
  margin-bottom: 0;
`;

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
    <Wrapper>
      <StyledIncome>
        <IncomeHeader>Income</IncomeHeader>
        <span>Rs {income}</span>
      </StyledIncome>
      <StyledExpense>
        <ExpenseHeader>Expense</ExpenseHeader>
        <span>Rs {expense}</span>
      </StyledExpense>
    </Wrapper>
  );
}

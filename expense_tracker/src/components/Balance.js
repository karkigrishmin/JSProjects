import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const BalanceContainer = styled.div`
  background: #ccc;
  width: 20%;
`;

const BalanceHeader = styled.h4`
  margin-bottom: 0;
`;

export function Balance() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  console.log(total);

  return (
    <BalanceContainer>
      <BalanceHeader>Your Balance</BalanceHeader>
      <span>Rs{total}</span>
    </BalanceContainer>
  );
}

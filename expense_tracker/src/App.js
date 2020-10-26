import React from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpense } from "./components/IncomeExpense";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

const Container = styled.main`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ccc;
  width: 40%;
  /* padding: 1rem; */
`;

export function App() {
  return (
    <Container>
      <GlobalProvider>
        <Header />
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </GlobalProvider>
    </Container>
  );
}

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 0, text: "Rent", amount: -1000 },
    { id: 1, text: "Momo", amount: -50 },
    { id: 2, text: "Salary", amount: +10000 },
    { id: 3, text: "Book", amount: -500 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

// Provider component to pass down value
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
}

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function Transaction({ id, text, amt }) {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amt > 0 ? "+" : "-";

  return (
    <>
      <li className={amt > 0 ? "plus" : "minus"}>
        {text}
        <span>
          {sign}Rs{Math.abs(amt)}
        </span>
        <button onClick={(e) => deleteTransaction(id)}>Delete</button>
      </li>
    </>
  );
}

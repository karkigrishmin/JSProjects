import React from "react";

export function Transaction({ id, text, amt }) {
  const sign = amt > 0 ? "+" : "-";

  return (
    <>
      <li className={amt > 0 ? "plus" : "minus"}>
        {text}
        <span>
          {sign}Rs{Math.abs(amt)}
        </span>
      </li>
    </>
  );
}

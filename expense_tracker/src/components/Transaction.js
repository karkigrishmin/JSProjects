import React from "react";

export function Transaction({ id, text, amt }) {
  return (
    <>
      <li>
        {text} <span>{amt}</span>
      </li>
    </>
  );
}

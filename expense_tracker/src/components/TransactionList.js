import React from "react";

export function TransactionList() {
  return (
    <div className="history">
      <h6>History</h6>
      <div className="history-list">
        <ul>
          <li>
            cash <span>+Rs100</span>
          </li>
        </ul>
        <ul>
          <li>cash</li>
        </ul>
        <ul>
          <li>cash</li>
        </ul>
      </div>
    </div>
  );
}

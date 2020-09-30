import React from "react";

const ApprovalCard = ({ children }) => {
  return (
    <div>
      {children}
      <div className="btns">
        <button>Add</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ApprovalCard;

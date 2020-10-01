import React from "react";

const SearchBar = ({ change }) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={change} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;

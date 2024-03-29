import React from "react";

const SearchBar = ({ change, submitSearch, inputValue }) => {
  return (
    <div>
      Image Search
      <form onSubmit={submitSearch}>
        <input type="text" onChange={change} value={inputValue} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default SearchBar;

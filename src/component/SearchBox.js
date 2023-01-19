import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa2 br2 bg-washed-green b--light-green"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
        >
      </input>
    </div>
  )
}

export default SearchBox

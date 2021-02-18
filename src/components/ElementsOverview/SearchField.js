import React from "react";

const SearchField = ({ changeDescription }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          placeholder="Search..."
          onChange={(e) => changeDescription(e.target.value)}
        />
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>
  );
};

export default SearchField;

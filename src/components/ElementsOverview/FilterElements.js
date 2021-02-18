import React from "react";
import SearchField from "./SearchField";
import DropdownField from "./DropdownField";

const FilterElements = ({
  elements,
  setGroup,
  setApparatus,
  setDescription,
  setDifficulty,
}) => {
  const groups = Array.from(new Set(elements.map((el) => el.group))).sort(
    (a, b) => a - b
  );
  const apparatus = Array.from(
    new Set(elements.map((el) => el.apparatus))
  ).sort((a, b) => a.localeCompare(b));
  const difficulty = Array.from(
    new Set(elements.map((el) => el.value))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <form className="ui form">
      <div className="fields">
        <DropdownField
          attribute="Apparatus"
          data={apparatus}
          onChange={setApparatus}
        />
        <DropdownField
          attribute="Group"
          data={groups}
          onChange={(group) => setGroup(Number(group))}
        />
        <DropdownField
          attribute="Difficulty"
          data={difficulty}
          onChange={setDifficulty}
        />
        <div className="three wide field">
          <label>Search Description</label>
          <SearchField changeDescription={setDescription} />
        </div>
      </div>
    </form>
  );
};

export default FilterElements;

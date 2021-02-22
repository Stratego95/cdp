import PropTypes from "prop-types";
import SearchField from "./SearchField";
import DropdownField from "./DropdownField";

const FilterElements = ({
  elements,
  setGroup,
  setApparatus,
  setDescription,
  setDifficulty,
  setIdentifier,
  difficulty,
  identifier,
  apparatus,
  description,
  group,
}) => {
  const groupsSelection = Array.from(
    new Set(elements.map((el) => el.group))
  ).sort((a, b) => a - b);

  const apparatusSelection = Array.from(
    new Set(elements.map((el) => el.apparatus))
  ).sort((a, b) => a.localeCompare(b));

  const difficultySelection = Array.from(
    new Set(elements.map((el) => el.difficulty))
  ).sort((a, b) => a.localeCompare(b));

  return (
    <form className="ui form">
      <div className="fields">
        <DropdownField
          attribute="Apparatus"
          data={apparatusSelection}
          onChange={setApparatus}
          value={apparatus}
        />
        <DropdownField
          attribute="Group"
          data={groupsSelection}
          onChange={(group) => setGroup(Number(group))}
          value={group}
        />
        <DropdownField
          attribute="Difficulty"
          data={difficultySelection}
          onChange={setDifficulty}
          value={difficulty}
        />
        <div className="three wide field">
          <label>Search Description</label>
          <SearchField onChange={setDescription} value={description} />
        </div>
        <div className="three wide field">
          <label>Search Identifier</label>
          <SearchField onChange={setIdentifier} value={identifier} />
        </div>
      </div>
    </form>
  );
};

FilterElements.propTypes = {
  elements: PropTypes.array.isRequired,
  setGroup: PropTypes.func.isRequired,
  setApparatus: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  setIdentifier: PropTypes.func.isRequired,
  difficulty: PropTypes.string.isRequired,
  identifier: PropTypes.string.isRequired,
  apparatus: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  group: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default FilterElements;

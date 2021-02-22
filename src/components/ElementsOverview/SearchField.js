import PropTypes from "prop-types";

const SearchField = ({ onChange, value }) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          type="text"
          placeholder="Search..."
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
        <i className="search icon"></i>
      </div>
      <div className="results"></div>
    </div>
  );
};

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchField;

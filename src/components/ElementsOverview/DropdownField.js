import PropTypes from "prop-types";

const DropdownField = ({ attribute, data, onChange, value }) => {
  return (
    <div className="three wide field">
      <label>Select {attribute}</label>
      <select
        className="ui fluid search dropdown"
        onChange={(e) => onChange(e.target.value)}
      >
        <option value={value}>{value || `Select ${attribute}`}</option>
        {data.map((data, index) => {
          return (
            <option key={index} value={data}>
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );
};

DropdownField.propTypes = {
  attribute: PropTypes.string.isRequired,
  data: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default DropdownField;

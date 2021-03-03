import PropTypes from "prop-types";

const ElementsToggle = ({ onToggle }) => {
  return (
    <div className="ui toggle checkbox margin-top">
      <input type="checkbox" onChange={() => onToggle()} />
      <label>Add Elements</label>
    </div>
  );
};

ElementsToggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default ElementsToggle;

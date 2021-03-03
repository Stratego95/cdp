import PropTypes from "prop-types";

const ApparatusSelection = ({ apparatusName, icon, onClick }) => {
  return (
    <div
      className="ui vertical animated button"
      tabIndex="0"
      style={{ height: "2.7rem" }}
      onClick={() => onClick()}
    >
      <div className="hidden content">{apparatusName}</div>
      <div className="visible content">
        <i className={icon}></i>
      </div>
    </div>
  );
};

ApparatusSelection.propTypes = {
  apparatusName: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ApparatusSelection;

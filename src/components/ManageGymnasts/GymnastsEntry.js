import PropTypes from "prop-types";
import ApparatusSelection from "./ApparatusSelection";

const GymnastsEntry = ({ gym, apparatusClicked, deleteGymnast }) => {
  return (
    <div className="row gymnasts-entry">
      <h3>{gym.name}</h3>
      <ApparatusSelection
        apparatus="Floor"
        icon="cloud icon"
        onClick={() => apparatusClicked("floor")}
      />
      <ApparatusSelection
        apparatus="Jump"
        icon="shop icon"
        onClick={() => apparatusClicked("jump")}
      />
      <ApparatusSelection
        apparatus="Floor"
        icon="cloud icon"
        onClick={() => apparatusClicked("")}
      />
      <ApparatusSelection
        apparatus="Floor"
        icon="cloud icon"
        onClick={() => apparatusClicked("")}
      />
      <button
        className="ui negative basic button"
        onClick={() => deleteGymnast(gym.name)}
      >
        Delete Gymnast
      </button>
    </div>
  );
};

GymnastsEntry.propTypes = {
  gym: PropTypes.object.isRequired,
  apparatusClicked: PropTypes.func.isRequired,
  deleteGymnast: PropTypes.func.isRequired,
};

export default GymnastsEntry;

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import ApparatusSelection from "./ApparatusSelection";
import { listApparatuss } from "./../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const GymnastsEntry = ({ gymnast, onApparatusClicked, deleteGymnast }) => {
  const [apparatusOfGymnast, setApparatusOfGymnast] = useState([]);

  useEffect(() => {
    API.graphql(graphqlOperation(listApparatuss)).then((data) =>
      setApparatusOfGymnast(
        data.data.listApparatuss.items.filter(
          (item) => item.gymnast.id === gymnast.id
        )
      )
    );
  }, []);

  return (
    <div className="row gymnasts-entry">
      <h3 className="gymnast-label">{gymnast.name}</h3>
      {apparatusOfGymnast.map((apparatus, index) => (
        <ApparatusSelection
          key={index}
          apparatusName={apparatus.name}
          icon="cloud icon"
          onClick={() => onApparatusClicked(gymnast, apparatus)}
        />
      ))}

      <button
        className="ui negative basic button"
        onClick={() => deleteGymnast(gymnast.id)}
      >
        Delete Gymnast
      </button>
    </div>
  );
};

GymnastsEntry.propTypes = {
  gymnast: PropTypes.object.isRequired,
  onApparatusClicked: PropTypes.func.isRequired,
  deleteGymnast: PropTypes.func.isRequired,
};

export default GymnastsEntry;

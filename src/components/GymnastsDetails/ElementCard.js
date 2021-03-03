import PropTypes from "prop-types";

const ElementCard = ({
  id,
  identifier,
  difficulty,
  description,
  onRemoveCard,
}) => {
  return (
    <div className="card">
      <div className="content">
        <i
          className="right floated trash
 icon"
          onClick={() => onRemoveCard(id)}
        ></i>
        <div className="header">{identifier}</div>
        <div className="meta">{difficulty}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

ElementCard.propTypes = {
  identifier: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemoveCard: PropTypes.func.isRequired,
};

export default ElementCard;

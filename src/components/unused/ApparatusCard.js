import PropTypes from "prop-types";

const ApparatusCard = ({ name, image, onClick }) => {
  return (
    <div className="ui card" onClick={(e) => onClick(e)}>
      <div className="image">
        <img src={image} />
      </div>
      <div className="content">
        <a className="header">{name}</a>
      </div>
    </div>
  );
};

ApparatusCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ApparatusCard;

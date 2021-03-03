import PropTypes from "prop-types";

const CreateGymnast = ({ newGymnast, changeGymnast, addGymnast }) => {
  return (
    <form className="row ui form">
      <div className="two wide field">
        <label>Add new Gymnast</label>
        <input
          type="text"
          name="gymnast"
          placeholder="Gymnast Name"
          value={newGymnast}
          onChange={(e) => changeGymnast(e.currentTarget.value)}
        />
      </div>
      <button className="ui button" type="button" onClick={() => addGymnast()}>
        Add gymnast
      </button>
    </form>
  );
};

CreateGymnast.propTypes = {
  newGymnast: PropTypes.string.isRequired,
  changeGymnast: PropTypes.func.isRequired,
  addGymnast: PropTypes.func.isRequired,
};

export default CreateGymnast;

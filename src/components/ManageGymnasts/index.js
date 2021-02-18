import React, { useState } from "react";
import GymnastsEntry from "./GymnastsEntry";

const ManageGymnasts = () => {
  const [gymnasts, setGymnasts] = useState([]);
  const [newGymnast, setNewGymnast] = useState("");

  const apparatusClicked = (apparatus) => {
    console.log(`${apparatus} clicked`);
  };

  const deleteGymnast = (name) => {
    const filteredGymnasts = gymnasts.filter((gym) => gym.name !== name);
    setGymnasts(filteredGymnasts);
  };

  const addGymnast = () => {
    if (newGymnast !== "") {
      const gymnastObject = { name: newGymnast };
      setGymnasts([...gymnasts, gymnastObject]);
      setNewGymnast("");
    }
  };

  return (
    <div className="content-Container">
      <form className="row ui form">
        <div className="two wide field">
          <label>Add new Gymnast</label>
          <input
            type="text"
            name="gymnast"
            placeholder="Gymnast Name"
            value={newGymnast}
            onChange={(e) => setNewGymnast(e.currentTarget.value)}
          />
        </div>
        <button
          className="ui button"
          type="button"
          onClick={() => addGymnast()}
        >
          Add gymnast
        </button>
      </form>
      <div className="ui grid">
        {gymnasts.map((gym, index) => (
          <GymnastsEntry
            key={index}
            gym={gym}
            apparatusClicked={apparatusClicked}
            deleteGymnast={deleteGymnast}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageGymnasts;

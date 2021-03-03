import React, { useState, useEffect, useContext } from "react";
import GymnastsEntry from "./GymnastsEntry";
import {
  createTrainer,
  createGymnast,
  deleteGymnast,
  createApparatus,
} from "./../../graphql/mutations";
import { listTrainers, listGymnasts } from "./../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { CurrentUser } from "./../App";
import CreateGymnast from "./CreateGymnast";
import { useHistory } from "react-router-dom";

const ManageGymnasts = () => {
  const [gymnasts, setGymnasts] = useState([]);
  const [newGymnast, setNewGymnast] = useState("");
  const [trainers, setTrainers] = useState([]);
  const [currentTrainer, setCurrentTrainer] = useState({});
  const currentUser = useContext(CurrentUser);
  const history = useHistory();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      fetchTrainers();
      fetchGymnasts(currentUser);
    }
    return function cleanup() {
      mounted = false;
    };
  }, []);

  const removeGymnast = (gymnastId) => {
    API.graphql({
      query: deleteGymnast,
      variables: {
        input: { id: gymnastId },
      },
    }).then(fetchGymnasts());
  };

  const fetchTrainers = () => {
    API.graphql({ query: listTrainers }).then((data) => {
      const trainerRes = data.data.listTrainers.items;
      setTrainers(trainerRes);
      const current = trainerRes.find(
        (trainer) => trainer.name === currentUser
      );
      setCurrentTrainer(current);
    });
  };

  const fetchGymnasts = (currentUser) => {
    API.graphql(
      graphqlOperation(listGymnasts, { trainer: currentUser })
    ).then((data) => setGymnasts(data.data.listGymnasts.items));
  };

  const trainerExist = () => {
    let exist = false;
    trainers.forEach((trainer) => {
      if (trainer.name === currentUser) exist = true;
    });
    return exist;
  };

  const addTrainer = () => {
    API.graphql({
      query: createTrainer,
      variables: { input: { name: currentUser } },
    }).then((res) => setCurrentTrainer(res.data.createTrainer));
  };

  const addGymnast = () => {
    if (newGymnast) {
      if (!trainerExist()) addTrainer();
      API.graphql({
        query: createGymnast,
        variables: {
          input: { name: newGymnast, gymnastTrainerId: currentTrainer.id },
        },
      }).then((newGymnastObject) => addedGymnast(newGymnastObject));

      setNewGymnast("");
    }
  };

  const addedGymnast = (newGymnastObject) => {
    fetchGymnasts();
    const apparatusTypes = ["floor", "balance beam", "vault", "uneven bars"];
    const newGymnastId = newGymnastObject.data.createGymnast.id;
    for (const type of apparatusTypes) {
      API.graphql({
        query: createApparatus,
        variables: {
          input: {
            name: type,
            apparatusGymnastId: newGymnastId,
            elements: [],
          },
        },
      });
    }
  };

  const apparatusClicked = (gymnast, apparatus) => {
    history.push({
      pathname: `/gymnasts/${currentUser}/${apparatus.name}`,
      state: { apparatus: apparatus, gymnast: gymnast },
    });
  };

  return (
    <div className="content-Container">
      <CreateGymnast
        newGymnast={newGymnast}
        changeGymnast={setNewGymnast}
        addGymnast={addGymnast}
      />
      <div className="ui grid">
        {gymnasts.map((gymnast, index) => (
          <GymnastsEntry
            key={index}
            gymnast={gymnast}
            onApparatusClicked={apparatusClicked}
            deleteGymnast={removeGymnast}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageGymnasts;

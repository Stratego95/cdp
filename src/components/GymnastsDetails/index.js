import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ElementsOverview from "../ElementsOverview";
import ElementCard from "./ElementCard";
import ElementsToggle from "./ElementsToggle";
import { updateApparatus } from "../../graphql/mutations";
import { listGymnasticElements } from "../../graphql/queries";
import { API } from "aws-amplify";

const GymnastsDetails = () => {
  const location = useLocation();
  const [apparatus, setApparatus] = useState({});
  const [gymnast, setGymnast] = useState({});
  const [selectedElements, setSelectedElements] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [score, setScore] = useState(0);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    setGymnast(location.state.gymnast);
    setApparatus(location.state.apparatus);
    fetchGymnasticElements();
  }, []);

  useEffect(() => {
    const newScore = calculateScore(selectedElements);
    setScore(newScore);
  }, [selectedElements]);

  useEffect(() => {
    if (elements.length && apparatus.elements) {
      let apparatusElements = [];
      apparatusElements = elements.filter((el) =>
        apparatus.elements.includes(el.id)
      );
      setSelectedElements(apparatusElements);
    }
  }, [apparatus, elements]);

  async function fetchGymnasticElements() {
    const apiData = await API.graphql({
      query: listGymnasticElements,
    });
    const elements = [];
    elements.push(...apiData.data.listGymnasticElements.items);
    let nextToken = apiData.data.listGymnasticElements.nextToken;
    while (nextToken) {
      const apiData = await API.graphql({
        query: listGymnasticElements,
        variables: { nextToken },
      });
      nextToken = apiData.data.listGymnasticElements.nextToken;
      elements.push(...apiData.data.listGymnasticElements.items);
    }
    setElements(elements);
  }

  const onElementClicked = (item) => {
    if (!selectedElements.includes(item))
      setSelectedElements([...selectedElements, item]);
    API.graphql({
      query: updateApparatus,
      variables: {
        input: { id: apparatus.id, elements: [...apparatus.elements, item.id] },
      },
    }).then((res) => setApparatus(res.data.updateApparatus));
  };

  const calculateScore = (elements) => {
    let scores = [];
    const difficulty = {
      A: 0.1,
      B: 0.2,
      C: 0.3,
      D: 0.4,
      E: 0.5,
      F: 0.6,
      G: 0.7,
      H: 0.8,
      I: 0.9,
    };
    let score = 0;
    for (const element of elements) {
      const difficultyNum = difficulty[element.difficulty];
      scores.push({ type: "todo", difficulty: difficultyNum });
    }
    scores.sort((a, b) => b.difficulty - a.difficulty);

    for (let i = 0; i < scores.length; i++) {
      if (i < 8) score += scores[i].difficulty;
    }
    return score.toFixed(1);
  };

  const onDeleteElement = (id) => {
    const filteredElements = apparatus.elements.filter((el) => el !== id);
    API.graphql({
      query: updateApparatus,
      variables: {
        input: { id: apparatus.id, elements: filteredElements },
      },
    }).then((res) => setApparatus(res.data.updateApparatus));
  };

  return (
    <div className="content-Container">
      <h3>Gymnast: {gymnast.name}</h3>
      <h3>Apparatus: {apparatus.name}</h3>
      <h3>Current maximal Score: {score}</h3>
      {!selectedElements.length && <h3>No Elements selected</h3>}
      <div className="ui cards">
        {selectedElements.map((element, index) => (
          <ElementCard
            key={index}
            index={index}
            id={element.id}
            identifier={element.identifier}
            difficulty={element.difficulty}
            description={element.description}
            onRemoveCard={onDeleteElement}
          />
        ))}
      </div>
      <ElementsToggle onToggle={() => setToggle(!toggle)} />
      {toggle && (
        <ElementsOverview
          apparatus={apparatus.name}
          onClick={onElementClicked}
        />
      )}
    </div>
  );
};

export default GymnastsDetails;

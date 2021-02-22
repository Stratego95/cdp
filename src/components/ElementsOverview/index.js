import { useState, useEffect, useMemo } from "react";
import { API } from "aws-amplify";
import { listGymnasticElements } from "../../graphql/queries";
import DataTable from "react-data-table-component";
import FilterElements from "./FilterElements";
import PropTypes from "prop-types";

const ElementsOverview = ({ apparatus, onClick }) => {
  const [elements, setElements] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [description, setDescription] = useState("");
  const [selectedApparatus, setSelectedApparatus] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [identifier, setIdentifier] = useState("");

  const columns = useMemo(
    () => [
      {
        name: "Element",
        selector: "identifier",
        sortable: true,
      },
      {
        name: "Description",
        selector: "description",
        sortable: true,
        wrap: true,
      },
      {
        name: "Group",
        selector: "group",
        sortable: true,
      },
      {
        name: "Difficulty",
        selector: "difficulty",
        sortable: true,
      },
    ],
    []
  );

  useEffect(() => {
    let mounted = true;
    if (mounted) fetchGymnasticElements();
    if (apparatus) setSelectedApparatus(apparatus);
    return function cleanup() {
      mounted = false;
    };
  }, []);

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

  let data = elements;
  if (selectedGroup) data = data.filter((el) => el.group === selectedGroup);
  if (selectedApparatus)
    data = data.filter((el) => el.apparatus === selectedApparatus);
  if (description)
    data = data.filter((el) => el.description.includes(description));
  if (selectedDifficulty)
    data = data.filter((el) => el.difficulty === selectedDifficulty);
  if (identifier)
    data = data.filter((el) => el.identifier.includes(identifier));

  return (
    <div className="content-Container">
      <FilterElements
        elements={elements}
        group={selectedGroup}
        identifier={identifier}
        description={description}
        difficulty={selectedDifficulty}
        apparatus={selectedApparatus}
        setGroup={setSelectedGroup}
        setApparatus={setSelectedApparatus}
        setDescription={setDescription}
        setDifficulty={setSelectedDifficulty}
        setIdentifier={setIdentifier}
      />
      <DataTable
        title={`${selectedApparatus || ""} Elements`}
        columns={columns}
        data={data}
        theme="dark"
        pagination
        responsive={true}
        onRowClicked={(element) => onClick(element)}
        highlightOnHover={true}
        pointerOnHover={true}
      />
    </div>
  );
};

ElementsOverview.propTypes = {
  apparatus: PropTypes.string,
  onClick: PropTypes.func,
};

export default ElementsOverview;

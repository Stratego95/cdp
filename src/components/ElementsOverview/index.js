import { useState, useEffect, useMemo } from "react";
import { API, Storage } from "aws-amplify";
import { listElements } from "../../graphql/queries";
import DataTable from "react-data-table-component";
import FilterElements from "./FilterElements";

const ElementsOverview = () => {
  const [elements, setElements] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [description, setDescription] = useState(null);
  const [selectedApparatus, setSelectedApparatus] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const columns = useMemo(
    () => [
      {
        name: "Element",
        selector: "name",
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
        selector: "value",
        sortable: true,
      },
    ],
    []
  );

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listElements });
    const notesFromAPI = apiData.data.listElements.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const image = await Storage.get(note.image);
          note.image = image;
        }
        return note;
      })
    );
    setElements(apiData.data.listElements.items);
  }

  let data = elements;
  if (selectedGroup !== null)
    data = data.filter((el) => el.group === selectedGroup);
  if (selectedApparatus !== null)
    data = data.filter((el) => el.apparatus === selectedApparatus);
  if (description !== null)
    data = data.filter((el) => el.description.includes(description));
  if (selectedDifficulty !== null)
    data = data.filter((el) => el.value === selectedDifficulty);

  return (
    <div className="content-Container">
      <FilterElements
        elements={elements}
        setGroup={setSelectedGroup}
        setApparatus={setSelectedApparatus}
        setDescription={setDescription}
        setDifficulty={setSelectedDifficulty}
      />

      <DataTable
        title={`${selectedApparatus ? selectedApparatus : ""} Elements`}
        columns={columns}
        data={data}
        theme="dark"
        pagination
        responsive={true}
      />
    </div>
  );
};

export default ElementsOverview;

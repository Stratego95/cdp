import React, { useState } from "react";
import { API, Storage } from "aws-amplify";
import { createElement } from "../graphql/mutations";
const initialFormState = {
  name: "",
  description: "",
  image: "",
  value: "",
  apparatus: "",
  group: 0,
  compositionRules: "",
};

function DataInput() {
  //const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  async function onSave() {
    console.log("save");
    console.log(formData);
    /* if (!formData.name || !formData.description || !formData.image
         || !formData.value || !formData.apparatus || !formData.group) return;*/
    formData.compositionRules = JSON.stringify(formData.compositionRules);
    const result = await API.graphql({
      query: createElement,
      variables: { input: formData },
    });
    console.log("result");
    console.log(result);
  }

  async function onImageSelected(e) {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
  }
  return (
    <div>
      <input
        placeholder="Enter Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <br />
      <input
        placeholder="Enter Description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
      <br />
      <input
        placeholder="Enter Value"
        value={formData.value}
        onChange={(e) => setFormData({ ...formData, value: e.target.value })}
      />
      <br />
      <input
        placeholder="Enter Group"
        value={formData.group}
        onChange={(e) => setFormData({ ...formData, group: e.target.value })}
      />
      <br />
      <input
        placeholder="Enter Apparatus"
        value={formData.apparatus}
        onChange={(e) =>
          setFormData({ ...formData, apparatus: e.target.value })
        }
      />
      <br />
      <input
        placeholder="Enter Composition rules"
        value={formData.compositionRules}
        onChange={(e) =>
          setFormData({ ...formData, compositionRules: e.target.value })
        }
      />
      <br />
      <input type="file" onChange={onImageSelected} />
      <br />
      <button onClick={onSave}>Save</button>
    </div>
  );
}

export default DataInput;

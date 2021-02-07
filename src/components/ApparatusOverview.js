import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { listElements, listNotes } from '../graphql/queries';
import DataTable from 'react-data-table-component';

const ApparatusOverview = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, [])

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listElements });
        const notesFromAPI = apiData.data.listElements.items;
        await Promise.all(notesFromAPI.map(async note => {
          if (note.image) {
            const image = await Storage.get(note.image);
            note.image = image;
          }
          return note;
        }))
        setElements(apiData.data.listElements.items);
      }

      console.log(elements)

    return(
        <div>
            <h1>Element</h1>
            <DataTable
                title="Gymnastic Elements"
            />
            
        </div>
    )
}

export default ApparatusOverview;
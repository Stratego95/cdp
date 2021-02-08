import React from 'react';

const DropdownField = ({attribute, data, onChange}) => {
    return(
        <div className="three wide field">
            <label>Select {attribute}</label>
            <select className="ui fluid search dropdown" onChange={(e) => onChange(e.target.value)}>
                <option value={null}>Select {attribute}</option>
                {data.map((data, index) => {
                    return <option key={index} value={data}>{data}</option>
                })}
            </select>
        </div>
    )
}

export default DropdownField;
import React from 'react';
import ApparatusCard from './ApparatusCard';
import rings from './../assets/images/gymnastic-rings.svg';

const SelectApparatus = () => {

    const onApparatusClicked = (e) => {
        console.log("apparatus")
        console.log(e.target)
    }

    return(
        <div className="ui two column grid">
            <div className="column">
                <div className="ui segment">
                    <ApparatusCard name="Vault" image={rings} onClick={onApparatusClicked}/>
                </div>
                <div className="ui segment">
                <ApparatusCard name="Uneven Bars" image={rings} onClick={onApparatusClicked}/>
                </div>
            </div>
            <div className="column">
                <div className="ui segment">
                <ApparatusCard name="Balance Beam" image={rings} onClick={onApparatusClicked}/>
                </div>
                <div className="ui segment">
                <ApparatusCard name="Floor" image={rings} onClick={onApparatusClicked}/>
                </div>
            </div>
            </div>
    )
}

export default SelectApparatus;
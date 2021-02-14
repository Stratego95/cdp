import React from 'react';

const ApparatusCard = ({name, image, onClick}) => {
    return(
        <div className="ui card" onClick={(e) => onClick(e)}>
            <div className="image">
                <img src={image}/>
            </div>
            <div className="content">
                <a className="header">{name}</a>
            </div>
        </div>
    )
}

export default ApparatusCard;
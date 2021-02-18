import React from "react";

const ApparatusSelection = ({ apparatus, icon, onClick }) => {
  return (
    <div
      className="ui vertical animated button"
      tabIndex="0"
      onClick={() => onClick()}
    >
      <div className="hidden content">{apparatus}</div>
      <div className="visible content">
        <i className={icon}></i>
      </div>
    </div>
  );
};

export default ApparatusSelection;

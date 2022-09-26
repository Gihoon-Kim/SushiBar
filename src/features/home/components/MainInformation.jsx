import React from "react";
import "./MainInformation.css";

function MainInformation({ items }) {
  return (
    <div className="infoContainer">
      <div className="screen">
        <div className="top">{items.infoTitle}</div>
        <div className="bottom">{items.infoDesc}</div>
        <img style={{ width: "100%" }} src={items.infoImage} alt="" />
      </div>
    </div>
  );
}

export default MainInformation;

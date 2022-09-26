import React from "react";
import "./MainInformation.css";

function MainInformation({ items }) {
  return (
    <div className="infoContainer">
      <div className="screen">
        <div className="top">
          <h1>{items.infoTitle}</h1>
        </div>
        <div className="bottom">
          <h4>{items.infoDesc}</h4>
        </div>
        <img style={{ width: "100%" }} src={items.infoImage} alt="" />
      </div>
    </div>
  );
}

export default MainInformation;

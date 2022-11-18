import React from "react";
import Events from "../svg/events";
import "./mileStones.scss";

function MileStones({ heading, milestones }) {
  return (
    <div className="mileStones">
      <h2>{heading}</h2>

      <div className="bulletListContainer">
        {milestones.map((mileStone) => (
          <div className="bulletCard">
            <span className="bullet"></span>
            <div className="bulletLine" />
            <div className="eventDuration">
              <Events className="eventIcon" />
              <p>{mileStone.time}</p>
            </div>
            <p className="mileStoneHeading">{mileStone.mileStone}</p>
            <p className="mileStoneDescription">{mileStone.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MileStones;

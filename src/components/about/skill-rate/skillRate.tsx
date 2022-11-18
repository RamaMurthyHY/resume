import React from "react";
import "./skillRate.scss";

function SkillRate() {
  return (
    <div className="skillsRate">
      {[1, 2, 3, 4].map(() => (
        <div className="progressBar">
          <div className="labels">
            <span className="skill">Node</span>
            <span className="percentage">80%</span>
          </div>
          <div className="progress">
            <div style={{ width: "75%" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillRate;

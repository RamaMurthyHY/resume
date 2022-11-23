import React from "react";
import { skillsRate } from "../constants";
import "./skillRate.scss";

function SkillRate() {
  return (
    <div className="skillsRate">
      {skillsRate.map((skill) => (
        <div className="progressBar">
          <div className="labels">
            <span className="skill">{skill.skill}</span>
            <span className="percentage">{skill.expertize}%</span>
          </div>
          <div className="progress">
            <div style={{ width: `${skill.expertize}%` }}>
              <div className="glowingBar" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillRate;

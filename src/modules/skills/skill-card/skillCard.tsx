import React from "react";
import { iSkill } from "../../../types";
import "./skillCard.scss";

interface iProps {
  skills: iSkill[];
}

function SkillCard(props: iProps) {
  const { skills } = props;

  return (
    <>
      {skills.map((skill) => {
        const Icon = skill.icon;
        console.log("Icon____", Icon);

        return (
          <div className="skillCard">
            <skill.icon className="skillIcon" />
            <div className="skillTitle">{skill.title}</div>
            <div className="skillDescription">{skill.description}</div>
          </div>
        );
      })}
    </>
  );
}

export default SkillCard;

// Java, Javascript, Typescript, React, NextJs, Node, Postgres, Sequelize, HTML, CSS, Sass

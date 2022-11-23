import React from "react";
import PageHeading from "../../components/page-heading/pageHeading";
import SkillCard from "./skill-card/skillCard";
import { SKILLS } from "./constants";
import "./skills.scss";

interface iProps {
  className?: string;
}

function Skills(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`skillsWrapper ${className}`}>
      <PageHeading heading="Skills" />
      <div className="skillCardsWrapper">
        <SkillCard skills={SKILLS} />
      </div>
    </div>
  );
}

Skills.defaultProps = {
  className: "",
};

export default Skills;

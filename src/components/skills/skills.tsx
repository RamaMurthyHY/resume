import React from "react";
import PageHeading from "../page-heading/pageHeading";

interface iProps {
  className?: string;
}

function Skills(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <PageHeading heading="Skills" />
    </div>
  );
}

Skills.defaultProps = {
  className: "",
};

export default Skills;

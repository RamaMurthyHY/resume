import React from "react";
import PageHeading from "components/page-heading/pageHeading";

interface iProps {
  className?: string;
}

function About(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <PageHeading heading="About me" />
    </div>
  );
}

About.defaultProps = {
  className: "",
};

export default About;

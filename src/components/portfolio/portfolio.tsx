import React from "react";
import PageHeading from "components/page-heading/pageHeading";

interface iProps {
  className?: string;
}

function Portfolio(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`${className}`}>
      <PageHeading heading="Portfolio" />
    </div>
  );
}

Portfolio.defaultProps = {
  className: "",
};

export default Portfolio;

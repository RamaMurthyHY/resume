import React from "react";
import "./pageHeading.scss";

interface iProps {
  className?: string;
  heading: string;
}

function PageHeading(props: iProps): JSX.Element {
  const { className, heading } = props;
  return (
    <div className={`pageHeading ${className}`}>
      <h1 className="heading">{heading}</h1>
      <hr className="hrOne" />
      <hr className="hrTwo" />
    </div>
  );
}

PageHeading.defaultProps = {
  className: "",
};

export default PageHeading;

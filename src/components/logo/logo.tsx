import React from "react";
import "./logo.scss";
interface iProps {
  className?: string;
}

function Logo(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`logo ${className}`}>
      Rama Murthy
      <div className="leftBottomAngle" />
      <div className="rightTopAngle" />
    </div>
  );
}

Logo.defaultProps = {
  className: "",
};

export default Logo;

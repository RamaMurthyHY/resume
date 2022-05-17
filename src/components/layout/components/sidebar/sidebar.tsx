import React from "react";
import "./sidebar.scss";

interface iProps {
  className?: string;
}

function Sidebar(props: iProps): JSX.Element {
  const { className } = props;
  return <div className={`sidebar ${className}`}>Sidebar</div>;
}

Sidebar.defaultProps = {
  className: "",
};

export default Sidebar;

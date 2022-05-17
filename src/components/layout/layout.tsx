import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import "./layout.scss";

interface iProps {
  className?: string;
}

function Layout(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`layout ${className}`}>
      <Sidebar />
      <div className="layoutBody"></div>
    </div>
  );
}

Layout.defaultProps = {
  className: "",
};

export default Layout;

import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import "./layout.scss";

interface iProps {
  className?: string;
  children: JSX.Element;
}

function Layout(props: iProps): JSX.Element {
  const { className, children } = props;
  return (
    <div className={`layout ${className}`}>
      <Sidebar />
      <div className="layoutBody">{children}</div>
    </div>
  );
}

Layout.defaultProps = {
  className: "",
};

export default Layout;

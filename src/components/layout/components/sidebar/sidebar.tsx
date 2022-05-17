import React from "react";
import "./sidebar.scss";
import Logo from "components/logo/logo";
import Navbar from "./components/navbar/navbar";
import Cross from "components/svg/cross";
import NavToggle from "components/svg/bars";

interface iProps {
  className?: string;
}

function Sidebar(props: iProps): JSX.Element {
  const { className } = props;
  const [isShowSidebar, setIsShowSidebar] = React.useState<boolean>(false);

  return (
    <div className={`sidebar ${isShowSidebar && "showSideBar"} ${className}`}>
      <div className="crossIcon">
        {isShowSidebar ? <Cross onClick={() => setIsShowSidebar(false)} /> : <NavToggle onClick={() => setIsShowSidebar(true)} />}
      </div>
      <div className="logoHolder">
        <Logo />
      </div>
      <Navbar />
    </div>
  );
}

Sidebar.defaultProps = {
  className: "",
};

export default Sidebar;

import React from "react";
import "./sidebar.scss";
import Logo from "../../../logo/logo";
import Navbar from "./components/navbar/navbar";
import Cross from "../../../svg/cross";
import NavToggle from "../../../svg/bars";
import { useStore } from "../../../../store";
import { layoutActions } from "../../../../store/actions";

interface iProps {
  className?: string;
}

function Sidebar(props: iProps): JSX.Element {
  const { className } = props;
  const [state, dispatch] = useStore();
  const { isShowSidebar } = state.layout || {};
  return (
    <div className={`sidebar ${isShowSidebar && "showSideBar"} ${className}`}>
      <div className="crossIcon">
        {isShowSidebar ? (
          <Cross
            onClick={() => dispatch(layoutActions.setShowSidebar(false))}
          />
        ) : (
          <NavToggle
            onClick={() => dispatch(layoutActions.setShowSidebar(true))}
          />
        )}
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

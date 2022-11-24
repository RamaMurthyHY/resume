import React, { useState } from "react";
import "./navbar.scss";
import { MENUS } from "../../../../../../constants/index";
import { useStore } from "../../../../../../store";
import { layoutActions } from "../../../../../../store/actions";

interface iProps {
  className?: string;
}

function Navbar(props: iProps): JSX.Element {
  const { className } = props;
  const [state, dispatch] = useStore();
  const { layout } = state;
  return (
    <ul className={`navbar ${className}`}>
      {MENUS.map((i) => {
        const Icon = i.icon;
        return (
          <li
            className={(layout.activeView === i.view && "activeNav") || ""}
            onClick={() => {
              dispatch(layoutActions.setActiveView(i.view));
              dispatch(layoutActions.setShowSidebar(false));
              window.scrollTo(0, 0);
            }}
          >
            <>
              <i.icon />
              <span>{i.name}</span>
            </>
          </li>
        );
      })}
    </ul>
  );
}

Navbar.defaultProps = {
  className: "",
};

export default Navbar;

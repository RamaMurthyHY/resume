import React, { useState } from "react";
import "./navbar.scss";
import Home from "components/svg/home";
import User from "components/svg/user";
import List from "components/svg/list";
import Briefcase from "components/svg/briefcase";
import AddressBook from "components/svg/addressBook";

interface iProps {
  className?: string;
}

const MENUS = [
  {
    id: 1,
    icon: Home,
    name: "Home",
  },
  {
    id: 2,
    icon: User,
    name: "About",
  },
  {
    id: 3,
    icon: List,
    name: "Services",
  },
  {
    id: 4,
    icon: Briefcase,
    name: "Portfolio",
  },
  {
    id: 5,
    icon: AddressBook,
    name: "Contact",
  },
];

function Navbar(props: iProps): JSX.Element {
  const { className } = props;
  const [active, setActive] = useState(MENUS[0]);
  return (
    <ul className={`navbar ${className}`}>
      {MENUS.map((i) => {
        const Icon = i.icon;
        return (
          <li className={(active.id === i.id && "activeNav") || ""} onClick={() => setActive(i)}>
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

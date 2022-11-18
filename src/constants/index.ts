import Home from "../components/svg/home";
import User from "../components/svg/user";
import List from "../components/svg/list";
import Briefcase from "../components/svg/briefcase";
import AddressBook from "../components/svg/addressBook";
import { Views } from "../enums/index";

export const MENUS = [
  {
    id: 1,
    icon: Home,
    name: "Home",
    view: Views.Home,
  },
  {
    id: 2,
    icon: User,
    name: "About",
    view: Views.About,
  },
  {
    id: 3,
    icon: List,
    name: "Skills",
    view: Views.Skills,
  },
  {
    id: 4,
    icon: Briefcase,
    name: "Portfolio",
    view: Views.Portfolio,
  },
  {
    id: 5,
    icon: AddressBook,
    name: "Contact",
    view: Views.Contact,
  },
];

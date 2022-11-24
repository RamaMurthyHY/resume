import Home from "../components/svg/home";
import User from "../components/svg/user";
import List from "../components/svg/list";
import Briefcase from "../components/svg/briefcase";
import AddressBook from "../components/svg/addressBook";
import { Views } from "../enums/index";

export const ABOUT_ME =
  "Full Stack Developer with 4+ years of hands-on experience designing, developing, and implementing application and solutions using a range of technologies and programming languages. Seeking to leaverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack developer.";

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
    name: "Projects",
    view: Views.Projects,
  },
  // {
  //   id: 5,
  //   icon: AddressBook,
  //   name: "Contact",
  //   view: Views.Contact,
  // },
];

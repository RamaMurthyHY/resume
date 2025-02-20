import Home from "../components/svg/home";
import User from "../components/svg/user";
import List from "../components/svg/list";
import Briefcase from "../components/svg/briefcase";
import { Views } from "../enums/index";

// export const ABOUT_ME =
//   "Full Stack Developer with 6+ years of hands-on experience designing, developing, and building scalable ad efficient  application and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack developer.";

  // new about me - optimize by comparing and old and new
  export const ABOUT_ME = "I am a passionate Full Stack Developer with over 6+ years of experience in developing scalable and efficient web applications. I have worked on both front-end and back-end technologies, which has allowed me to gain a deep understanding of the entire development lifecycle"

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

import React from "react";
import SkillRate from "./skill-rate/skillRate";
import Bio from "./bio/bio";
import { ABOUT_ME } from "../../constants";
import MileStones from "../../components/mile-stones/mileStones";
import PageHeading from "../../components/page-heading/pageHeading";
import "./about.scss";

interface iProps {
  className?: string;
}

const education = [
  {
    id: "312312mkof",
    time: "2013-2016",
    mileStone: "Master of Computer Application",
    description:
      "I have pursued Post graduation in Master Of Computer Application In 2016 by Kuvempu University, Shivamogga, Karnataka",
  },
  {
    id: "312312mkof",
    time: "2016",
    mileStone: "Core Java and J2EE certification",
    description:
      "I had undergone training on Java, J2EE & Spring with during 2016, in Uttara InfoSolutions Pvt. Ltd, Rajaji Nagara, Bangalore",
  },
];

const experience = [
  {
    id: "312312mkof",
    time: "2018-2022",
    mileStone: "Full Stack Developer",
    description:
      "I have started currier at 2018 as a Junior Software Development Engineer, In Code Matrix Software India Pvt Ltd, Bangalore, Initially started as a React developer and over the period of time started exploring things and became full stack developer",
  },
];

function About(props: iProps): JSX.Element {
  const { className } = props;
  return (
    <div className={`aboutComponent ${className}`}>
      <PageHeading heading="About me" />
      <h2 className="nameAndWork">
        I'm Rama Murthy and <span>Full stack developer</span>{" "}
      </h2>
      <p className="aboutMe">{ABOUT_ME}</p>

      <div className="personalDetailsAndSkillsRate">
        <Bio />
        <SkillRate />
        {/* <Button className="downloadCv" name="Download CV" /> */}
      </div>
      <div className="milestonesWrapperGrid">
        <MileStones heading="Education" milestones={education} />
        <MileStones heading="Experience" milestones={experience} />
      </div>
    </div>
  );
}

About.defaultProps = {
  className: "",
};

export default About;

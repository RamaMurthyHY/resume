import React from "react";
import SkillRate from "./skill-rate/skillRate";
import Bio from "./bio/bio";
import MileStones from "../../components/mile-stones/mileStones";
import Typewriter from "typewriter-effect";
import PageHeading from "../../components/page-heading/pageHeading";
import "./about.scss";

interface iProps {
  className?: string;
}

const education = [
  {
    id: "312312mkof",
    time: "2013-2016",
    mileStone: " Master in Computer Application",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ut dolorum pariatur consequatur eos, cumque totam suscipit amet tempora unde inventore atque perferendis laborum omnis sapiente consequuntur consectetur ex facilis?",
  },
  {
    id: "312312mkof",
    time: "2013-2016",
    mileStone: " Master in Computer Application",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ut dolorum pariatur consequatur eos, cumque totam suscipit amet tempora unde inventore atque perferendis laborum omnis sapiente consequuntur consectetur ex facilis?",
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
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello World!")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />

      <p className="aboutMe">
        Full Stack Developer with 4+ years of hands-on experience designing,
        developing, and implementing application and solutions using a range of
        technologies and programming languages. Seeking to leaverage broad
        development experience and hands-on technical expertise in a challenging
        role as a Full-stack developer
      </p>

      <div className="personalDetailsAndSkillsRate">
        <Bio />
        <SkillRate />
      </div>
      <div className="milestonesWrapperGrid">
        <MileStones heading="Education" milestones={education} />
        <MileStones heading="Experience" milestones={education} />
      </div>
    </div>
  );
}

About.defaultProps = {
  className: "",
};

export default About;

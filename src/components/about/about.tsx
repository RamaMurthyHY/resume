import React from "react";
import Button from "components/button/button";
import Typewriter from "typewriter-effect";
import PageHeading from "components/page-heading/pageHeading";
import "./about.scss";

interface iProps {
  className?: string;
}

const PERSONAL_INFORMATION = [
  { birthday: "18 May 1991" },
  { age: "31" },
  { education: "MCA" },
  { email: "reach.rambymail@gmail.com" },
  { phone: "+91 87489 61773" },
  { city: "Bangalore" },
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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis tenetur, ullam sed a consequuntur quis ipsum inventore officia dolor qui
        dolorem possimus reprehenderit magni ea quod alias. Iure, sunt soluta!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
        officiis repellat, maxime non magni illum, recusandae consequuntur autem esse asperiores dolorem laborum, a deleniti ab. Dolorum nam harum
        eveniet inventore?
      </p>

      <div className="personalDetailsAndSkillsRate">
        <div className="personalDetails">
          {PERSONAL_INFORMATION.map((i) => (
            <div className="details">
              <span className="label">{Object.keys(i)[0]}:</span>
              <span className="info">{Object.values(i)[0]}</span>
            </div>
          ))}
          <Button className="downloadCv" name="Download CV" />
        </div>
        <div className="skillsRate">
          {[1, 2, 3, 4].map(() => (
            <div className="progressBar">
              <div className="labels">
                <span className="skill">Node</span>
                <span className="percentage">80%</span>
              </div>
              <div className="progress">
                <div style={{ width: "75%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

About.defaultProps = {
  className: "",
};

export default About;

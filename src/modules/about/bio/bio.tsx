import React from "react";
import Button from "../../../components/button/button";
import "./bio.scss";

const PERSONAL_INFORMATION = [
  { birthday: "18 May 1991" },
  { education: "MCA" },
  { email: "reach.rambymail@gmail.com" },
  { phone: "+91 87489 61773" },
  { city: "Bangalore" },
];

function Bio() {
  const resumeFileName = `Rama_murthy_HY_Full_stack_developer-${Date.now()}.pdf`;
  return (
    <div className="personalDetails">
      {PERSONAL_INFORMATION.map((i) => (
        <div className="details">
          <span className="label">{Object.keys(i)[0]}:</span>
          <span className="info">{Object.values(i)[0]}</span>
        </div>
      ))}
      <a
        className="downloadCv"
        href="Rama_murthy_HY_Full_stack_developer.pdf"
        download={`Rama_murthy_HY_Full_stack_developer-${Date.now()}.pdf`}
      >
        Download Resume
        {/* <Button className="downloadCv" name="Download CV" /> */}
      </a>
    </div>
  );
}

export default Bio;

import React from "react";
import "./bio.scss";

const PERSONAL_INFORMATION = [
  { birthday: "18 May 1991" },
  { education: "MCA" },
  { email: "reach.rambymail@gmail.com" },
  { phone: "+91 87489 61773" },
  { city: "Bangalore" },
];

function Bio() {
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
        href="Ramamurthy_HY_Full_stack_developer.pdf"
        download={`Ramamurthy_HY_Full_stack_developer.pdf`}
      >
        Download Resume
        {/* <Button className="downloadCv" name="Download CV" /> */}
      </a>
    </div>
  );
}

export default Bio;

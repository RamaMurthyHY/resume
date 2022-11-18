import React from "react";
import Button from "../../button/button";
import "./bio.scss";

const PERSONAL_INFORMATION = [
  { birthday: "18 May 1991" },
  { age: "31" },
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
      <Button className="downloadCv" name="Download CV" />
    </div>
  );
}

export default Bio;

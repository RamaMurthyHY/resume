import React from "react";
import "./main.scss";
import { TypeAnimation } from "react-type-animation";
import ProfilePic from "../../assets/images/profile-photo.jpg";
import Button from "../button/button";
import { textAnimationSequence, description } from "./constants";
import { useStore } from "../../store";

interface iProps {
  className?: string;
}

function Main(props: iProps): JSX.Element {
  const { className } = props;
  const [state] = useStore();
  console.log({ state });

  return (
    <div className={`mainComponent ${className}`}>
      <div className="descriptionSection">
        <h1 className="name">
          Hello, my name is <span className="highLighter">Rama Murthy</span>
        </h1>
        <h1 className="specialization">
          I' m a{" "}
          <span className="highLighter">
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={textAnimationSequence}
              speed={65} // Custom Speed from 1-99 - Default Speed: 40
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </span>
        </h1>
        <p className="description">{description}</p>
        <Button name="More about me" />
      </div>
      <div className="profilePicSection">
        <div className="profileHolder">
          <div className="leftBottomAngle" />
          <div className="rightTopAngle" />
          <img src={ProfilePic} alt="" />
        </div>
      </div>
    </div>
  );
}

Main.defaultProps = {
  className: "",
};

export default Main;

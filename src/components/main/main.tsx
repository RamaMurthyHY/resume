import React from "react";
import "./main.scss";
import ProfilePic from "../../assets/images/profile-photo.jpg";
import Button from "components/button/button";
import { useStore } from "store";

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
          I' m a <span className="highLighter">Full stack developer</span>
        </h1>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nesciunt quis illo quaerat. Modi aperiam magni aliquid sit, quisquam nihil
          exercitationem praesentium adipisci velit, beatae minus vero enim placeat voluptatem?
        </p>
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

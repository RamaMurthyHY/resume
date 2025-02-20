import React from "react";
import "./home.scss";
import { TypeAnimation } from "react-type-animation";
import ProfilePic from "../../assets/images/profile-photo.jpg";
import Button from "../../components/button/button";
import { ABOUT_ME } from "../../constants";
import { useStore } from "../../store";
import { Views } from "../../enums/index";
import { layoutActions } from "../../store/actions";
import { textAnimationSequence } from "./constants";

interface iProps {
  className?: string;
}

function Home(props: iProps): JSX.Element {
  const { className } = props;
  const [, dispatch] = useStore();

  return (
    <div className={`mainComponent ${className}`}>
      <div className="descriptionSection">
        <h1 className="name">
          Hello, my name is <span className="highLighter">Rama Murthy</span>
        </h1>
        <h1 className="specialization">
          I' m a <br className="lineBreak" />
          <TypeAnimation
            className="highLighter"
            sequence={textAnimationSequence}
            speed={65} // Custom Speed from 1-99 - Default Speed: 40
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
        </h1>
        <p className="description">{ABOUT_ME}</p>
        <Button
          name="More about me"
          onClick={() => {
            dispatch(layoutActions.setActiveView(Views.About));
            dispatch(layoutActions.setShowSidebar(false));
            window.scrollTo(0, 0);
          }}
        />
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

Home.defaultProps = {
  className: "",
};

export default Home;

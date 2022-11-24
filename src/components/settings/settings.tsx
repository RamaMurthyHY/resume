import React, { useState } from "react";
import Gear from "../svg/gear";
import Sun from "../svg/sun";
import Moon from "../svg/moon";
import "./settings.scss";

const COLORS = [
  { color: "#c4df08" },
  { color: "#ffbe00" },
  { color: "#ff4400" },
  { color: "#DE3163" },
  { color: "#44e792" },
  { color: "#40E0D0" },
  { color: "#fd1d1d" },
  { color: "#8686f5" },
];

function Settings() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`settingsWrapper ${isOpen && "isOpen"}`}>
      <div className="settingsIcons">
        <div className={`iconWrapper `} onClick={() => setIsOpen(!isOpen)}>
          <Gear className="icon" />
        </div>
        <div className={`iconWrapper `}>
          <Sun className="icon" />
        </div>
      </div>
      <div className="themeColors">
        {/* <p className="themeColorsHeading">Theme colors</p> */}
        <div className="colorsList">
          {COLORS.map((color) => (
            <div
              style={{ background: color.color }}
              className="colorSample"
              onClick={() => {
                const root: any = document.querySelector(":root");
                root.style.setProperty("--theme1", color.color);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Settings;

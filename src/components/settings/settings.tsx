import React, { useCallback, useEffect, useState } from "react";
import Gear from "../svg/gear";
import Sun from "../svg/sun";
import Moon from "../svg/moon";
import "./settings.scss";
import { useStore } from "../../store";
import { layoutActions } from "../../store/actions";

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

const whiteMode1 = "#ececec";
const whiteMode2 = "#f8f8f8";
const whiteModeText = "#2d4159";

const darkMode1 = "#161516";
const darkMode2 = "#2a292a";
const darkModeText = "#ececec";

function Settings() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [state, dispatch] = useStore();
  const { isDarkMode = false } = state.layout;
  console.log("isDarkMode____", isDarkMode);

  const switchModeHandler = useCallback(() => {
    const root: any = document.querySelector(":root");

    if (!root) return;

    if (isDarkMode) {
      root.style.setProperty("--bg-theme", whiteMode1);
      root.style.setProperty("--bg-theme2", whiteMode2);
      root.style.setProperty("--generalText", whiteModeText);
      dispatch(layoutActions.setIsDarkMode(false));
    } else {
      root.style.setProperty("--bg-theme", darkMode1);
      root.style.setProperty("--bg-theme2", darkMode2);
      root.style.setProperty("--generalText", darkModeText);
      dispatch(layoutActions.setIsDarkMode(true));
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (isDarkMode) switchModeHandler();
  }, []);

  return (
    <div className={`settingsWrapper ${isOpen && "isOpen"}`}>
      <div className="settingsIcons">
        <div className={`iconWrapper `} onClick={() => setIsOpen(!isOpen)}>
          <Gear className="icon" />
        </div>
        <div className={`iconWrapper `} onClick={switchModeHandler}>
          {isDarkMode ? <Sun className="icon" /> : <Moon className="icon" />}
        </div>
      </div>
      <div className="themeColors">
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

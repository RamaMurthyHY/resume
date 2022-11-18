import { LAYOUT } from "../constants";
import { Views } from "../../enums/index";

export const layoutActions = {
  setActiveView: (view: Views) => ({
    type: LAYOUT.activeView,
    payload: view,
  }),
  setShowSidebar: (show: boolean) => ({
    type: LAYOUT.showSidebar,
    payload: show,
  }),
};

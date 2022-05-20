import { LAYOUT } from "../constants";
import { initialState } from "../initialState/initialState";

export const layoutReducer = (state = initialState.layout, action): any => {
  switch (action.type) {
    case LAYOUT.activeView: {
      return { ...state, activeView: action.payload };
    }
    case LAYOUT.showSidebar: {
      return { ...state, isShowSidebar: action.payload };
    }

    default:
      return state;
  }
};

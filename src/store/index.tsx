import React, { useMemo } from "react";
import { appStorage } from "../helpers/index";

const Store = React.createContext({});
Store.displayName = "Store";

export const useStore = (): any => React.useContext(Store);

export function StoreProvider({
  children,
  initialState,
  reducer,
}): JSX.Element {
  const localData = appStorage.getItem("context");
  const [globalState, dispatch] = React.useReducer(
    reducer,
    localData || initialState
  );

  // useEffect(() => {
  //   appStorage.removeItem('context');
  // }, []);

  window.onbeforeunload = () => {
    appStorage.setItem("context", globalState);
  };

  window.onload = () => {
    appStorage.removeItem("context");
  };

  const state = useMemo(() => [globalState, dispatch], [globalState]);

  return <Store.Provider value={state}>{children}</Store.Provider>;
}

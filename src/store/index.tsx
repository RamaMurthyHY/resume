import React, { useMemo } from "react";

const Store = React.createContext({});
Store.displayName = "Store";

export const useStore = (): any => React.useContext(Store);

export function StoreProvider({ children, initialState, reducer }): JSX.Element {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  const state = useMemo(() => [globalState, dispatch], [globalState]);

  return <Store.Provider value={state}>{children}</Store.Provider>;
}

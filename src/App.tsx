import React from "react";
import Home from "./modules/index";
import "./styles/global.scss";
import "./styles/fonts.scss";
import { StoreProvider } from "./store";
import { initialState } from "./store/initialState/initialState";
import { rootReducer } from "./store/reducers/rootReducer";

function App() {
  return (
    <div className="App">
      <StoreProvider initialState={initialState} reducer={rootReducer}>
        <Home />
      </StoreProvider>
    </div>
  );
}

export default App;

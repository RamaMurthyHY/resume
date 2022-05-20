import { layoutReducer } from "./layout.reducer";

export const rootReducer = (state, action): any => ({
  layout: layoutReducer(state.layout, action),
});

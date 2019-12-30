import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import Reactotron from "../components/globals/ReactotronConfig";
import { bibleReducer, windowsReducer } from "./features";

// import { whenStateChangeLoadBibleText } from "./features";

const rootReducers = combineReducers({
  bible: bibleReducer,
  windows: windowsReducer
});

export type AppState = ReturnType<typeof rootReducers>;

export function configureStore() {
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const store = createStore(
    rootReducers,
    composeWithDevTools(middlewareEnhancer, Reactotron.createEnhancer())
  );
  return store;
}

export const whenStateChangeTriggers = [];

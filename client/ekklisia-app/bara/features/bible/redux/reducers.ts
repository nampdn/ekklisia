import { combineReducers } from "redux";
import shortid from "shortid";

import {
  LOAD_TEXT,
  NEW_BIBLE,
  CACHE_TEXT,
  BibleState,
  BibleStoreState,
  BibleActionTypes,
  NewBibleAction,
  LoadTextAction
} from "./types";

const initialState: BibleState = {
  id: shortid.generate(),
  dam_id: "",
  book_code: "",
  chapter_order: "",
  selected_verses: [],
  loading: false,
  loaded: false
};

const initialStoreState: BibleStoreState = {
  cache: {},
  store: {}
};

export const singleBibleReducer = (
  state = initialState,
  action: LoadTextAction
) => {
  switch (action.type) {
    case NEW_BIBLE:
      return {
        ...state,
        ...action.payload
      };
    case LOAD_TEXT:
      const { text } = action.payload;
      return {
        ...state,
        text
      };
    default:
      return state;
  }
};

export const bibleStoreReducer = (
  state = initialStoreState.store,
  action: NewBibleAction
) => {
  switch (action.type) {
    case NEW_BIBLE:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    default:
      return state;
  }
};

export const cacheReducer = (state = initialStoreState.cache, action) => {
  switch (action.type) {
    case CACHE_TEXT:
      return {
        ...state,
        [action.payload.dam_id]: action.payload.text
      };
    default:
      return state;
  }
};

export const bibleReducer = combineReducers({
  cache: cacheReducer,
  store: bibleStoreReducer
});

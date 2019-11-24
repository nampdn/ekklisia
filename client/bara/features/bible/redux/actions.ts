import { LOAD_TEXT, NEW_BIBLE, NewBibleAction, LoadTextAction } from "./types";

export function loadText(payload: LoadTextAction["payload"]): LoadTextAction {
  return {
    type: LOAD_TEXT,
    payload
  };
}

export function newBible(payload: NewBibleAction["payload"]): NewBibleAction {
  return {
    type: NEW_BIBLE,
    payload
  };
}

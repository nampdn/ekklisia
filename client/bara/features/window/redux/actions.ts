import {
  NEW_WINDOW,
  CLOSE_WINDOW,
  FOCUS_WINDOW,
  NewWindowAction,
  CloseWindowAction,
  FocusWindowAction
} from "./types";

export function newWindow(
  payload: NewWindowAction["payload"]
): NewWindowAction {
  return {
    type: NEW_WINDOW,
    payload
  };
}

export function closeWindow({ id }: CloseWindowAction["payload"]) {
  return {
    type: CLOSE_WINDOW,
    payload: { id }
  };
}

export function focusWindow({ id }: FocusWindowAction["payload"]) {
  return {
    type: FOCUS_WINDOW,
    payload: { id }
  };
}

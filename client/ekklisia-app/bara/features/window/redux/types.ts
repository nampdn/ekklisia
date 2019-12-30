export type WindowType =
  | "BIBLE"
  | "COMMENTARY"
  | "STORY"
  | "DICTIONARY"
  | "MAP";

export interface WindowState {
  id: number;
  type: WindowType;
  data: any;
}

export interface WindowsState {
  autoIndex: number;
  selectedWindow: number;
  windows: Array<WindowState>;
}

export const NEW_WINDOW = "NEW_WINDOW";
export const CLOSE_WINDOW = "CLOSE_WINDOW";
export const FOCUS_WINDOW = "FOCUS_WINDOW";

export interface NewWindowAction {
  type: typeof NEW_WINDOW;
  payload: {
    type: WindowState["type"];
    data: any;
  };
}

export interface CloseWindowAction {
  type: typeof CLOSE_WINDOW;
  payload: {
    id: WindowState["id"];
  };
}

export interface FocusWindowAction {
  type: typeof FOCUS_WINDOW;
  payload: {
    id: WindowState["id"];
  };
}

export type WindowActionTypes =
  | NewWindowAction
  | CloseWindowAction
  | FocusWindowAction;

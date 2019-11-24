import {
  NEW_WINDOW,
  CLOSE_WINDOW,
  FOCUS_WINDOW,
  WindowsState,
  WindowActionTypes
} from "./types";

const initialState: WindowsState = {
  autoIndex: 0,
  selectedWindow: 0,
  windows: [
    {
      id: 1,
      type: "BIBLE",
      data: {
        title: "SA 1:10"
      }
    },
    {
      id: 2,
      type: "COMMENTARY",
      data: {
        title: "JM - GI 1"
      }
    },
    {
      id: 3,
      type: "BIBLE",
      data: {
        title: "GI 3:16"
      }
    }
  ]
};

export const windowsReducer = (
  state = initialState,
  action: WindowActionTypes
) => {
  switch (action.type) {
    case NEW_WINDOW:
      const { autoIndex } = state;
      const {
        payload: { type, data }
      } = action;
      const newWin = { id: autoIndex + 1, type, data };
      return {
        ...state,
        windows: [...state.windows, newWin],
        autoIndex: newWin.id
      };
    case CLOSE_WINDOW: {
      const { id } = action.payload;
      const windows = state.windows.filter(win => win.id !== id);
      return { ...state, windows };
    }
    case FOCUS_WINDOW: {
      const { id } = action.payload;
      return { ...state, selectedWindow: id };
    }
    default:
      return state;
  }
};

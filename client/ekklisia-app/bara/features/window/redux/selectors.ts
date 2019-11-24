import { createSelector } from "reselect";
import { AppState } from "../../../store";

export const selectAllWindows = createSelector(
  (state: AppState) => state.windows,
  windows => windows.windows
);

export const selectActiveWindow = createSelector(
  (state: AppState) => state.windows,
  ({ selectedWindow }) => selectedWindow
);

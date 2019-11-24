import { createSelector } from "reselect";

import { cond, act } from "@barajs/core";
import { Formula, side, pipe, log } from "@barajs/formula";
import { stateProp, select } from "@barajs/redux";

import { AppState } from "../../../store";

const selectWindows = createSelector(
  (state: AppState) => state.windows,
  windows => windows
);

export const whenWindowsChange = (formulas: Formula[]) =>
  cond(
    stateProp("windows"),
    act(
      select(
        pipe(
          selectWindows,
          side(...formulas)
        )
      )
    )
  );

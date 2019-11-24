import { createSelector } from "reselect";

import { cond, act } from "@barajs/core";
import { Formula, side, pipe } from "@barajs/formula";
import { stateProp, select } from "@barajs/redux";

import { AppState } from "../../../store";

const selectStore = createSelector(
  (state: AppState) => state.bible,
  bible => bible.store
);

const selectCache = createSelector(
  (state: AppState) => state.bible,
  bible => bible.cache
);

export const whenBibleStoreChange = (formulas: Formula[]) =>
  cond(
    stateProp("bible.store"),
    act(
      select(
        pipe(
          selectStore,
          side(...formulas)
        )
      )
    )
  );

export const whenBibleCacheChange = (formulas: Formula[]) =>
  cond(
    stateProp("bible.cache"),
    act(
      select(
        pipe(
          selectCache,
          side(...formulas)
        )
      )
    )
  );

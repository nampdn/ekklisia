import { createSelector } from 'reselect'

import { AppState } from '../../rematch'

export const selectScanningData = createSelector(
  (state: AppState) => state.scanner,
  scanner => scanner,
)

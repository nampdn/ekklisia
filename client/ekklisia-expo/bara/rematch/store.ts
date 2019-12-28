import { init, RematchRootState } from '@rematch/core'

import Reactotron from '../../components/Reactotron'

import models from './models'

export const store = init({
  models,
  redux: {
    enhancers: [Reactotron.createEnhancer()],
  },
})

export type Store = typeof store
export type Dispatch = typeof store.dispatch

export type AppState = RematchRootState<typeof models>

import { createModel } from '@rematch/core'

const initialState = {
  profile: {},
}

export const factoryModel = createModel({
  state: initialState,
  reducers: {
    setProfile: (state, payload) => {
      return { ...state, profile: payload }
    },
  },
})

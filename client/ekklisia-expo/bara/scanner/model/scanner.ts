import { createModel } from '@rematch/core'

const initialState = {
  type: '',
  data: '',
  isScanning: false,
  target: 0,
  from: '',
}

export const scannerModel = createModel({
  state: initialState,
  reducers: {
    scannerComplete: (state, payload) => {
      return { ...state, ...payload }
    },
    scannerReset: () => initialState,
  },
})

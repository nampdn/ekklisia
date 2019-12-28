import { createModel } from '@rematch/core'

export interface ReferralModel {
  profileId: string
}

export const referrerModel = createModel<ReferralModel>({
  state: {
    profileId: '',
  },
  reducers: {
    selectReferrer: (state, payload: ReferralModel) => {
      return {
        ...state,
        profileId: payload.profileId,
      }
    },
  },
})

import { createModel } from '@rematch/core'

export interface GoogleUser {
  id: string
  name: string
  givenName: string
  familyName: string
  photoUrl: string
  email: string
}

export interface AuthGooglePayload {
  type: string
  accessToken: string
  idToken: string
  refreshToken: string
  user: GoogleUser
}

export interface AuthState {
  id?: string
  phoneNumber: string
  email?: string
  photoUrl?: string
  fullName?: string
  googleId?: string
  googleToken?: string
  appleId?: string
  appleToken?: string
  isAuthenticated: boolean
}

export const authModel = createModel<AuthState>({
  state: {
    id: '',
    phoneNumber: '',
    email: '',
    photoUrl: '',
    fullName: '',
    googleId: '',
    googleToken: '',
    appleId: '',
    appleToken: '',
    isAuthenticated: false,
  },
  reducers: {
    authGoogle: (state: AuthState, payload: AuthGooglePayload): AuthState => {
      return {
        ...state,
        email: payload.user.email,
        fullName: payload.user.name,
        photoUrl: payload.user.photoUrl,
        googleId: payload.user.id,
        googleToken: payload.refreshToken,
      }
    },
    setPhoneNumber: (
      state: AuthState,
      payload: { phoneNumber: string },
    ): AuthState => {
      return {
        ...state,
        phoneNumber: payload.phoneNumber,
      }
    },
  },
})

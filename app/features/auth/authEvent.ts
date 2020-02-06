import { createEvent } from '@bit/barajs.portions.react'

const AUTH_EVENTS = {
  whenLoginStart: 'whenLoginStart',
  whenLoginSuccess: 'whenLoginSuccess',
  whenLoginFailed: 'whenLoginFailed',
}

export const {
  whenLoginStart,
  whenLoginFailed,
  whenLoginSuccess,
} = createEvent(AUTH_EVENTS)

import { dispatchInvoke } from '@barajs/redux'
import { getEventData } from '@bit/barajs.portions.react'
import { report } from '../report'

import { whenGoogleAuth } from './event'

export const authTriggers = [
  whenGoogleAuth([
    report('Google Auth {.}'),
    dispatchInvoke('auth.authGoogle', getEventData),
  ]),
]

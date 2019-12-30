import { cond, act, and } from '@barajs/core'
import { Formula, side } from '@barajs/formula'
import {
  whenComponentEmit,
  kindEq,
  propNameEq as eventEq,
} from '@bit/barajs.portions.react'

export const whenGoogleAuth = (formulas: Formula[]) =>
  whenComponentEmit(
    cond(
      and(kindEq('auth-screen'), eventEq('onGoogleAuth')),
      act(side(...formulas)),
    ),
  )

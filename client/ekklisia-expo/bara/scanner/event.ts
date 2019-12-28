import { cond, act, and } from '@barajs/core'
import { Formula, side, ifElse, eq, same, lensProp } from '@barajs/formula'
import {
  whenComponentEmit,
  kindEq,
  propNameEq as eventEq,
} from '@bit/barajs.portions.react'

export const whenScannerComplete = (formulas: Formula[]) =>
  whenComponentEmit(
    cond(
      and(kindEq('scanner'), eventEq('onBarCodeScanned')),
      act(side(...formulas)),
    ),
  )

export const whenScannerCompleteFrom = (from: string, formulas: Formula[]) =>
  whenComponentEmit(
    cond(
      and(kindEq('scanner'), eventEq('onBarCodeScanned')),
      act(
        ifElse(
          eq(lensProp('data.from'), () => from),
          side(...formulas),
          same(),
        ),
      ),
    ),
  )

export const whenScannerReset = (formulas: Formula[]) =>
  whenComponentEmit(
    cond(and(kindEq('scanner'), eventEq('onReset')), act(side(...formulas))),
  )

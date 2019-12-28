import { portion, flow, popEvent, popSeep } from '@barajs/core'

import { BARA_REACT, BaraReactContext, BaraReactMold } from './types'
import { context } from './context'
import * as seep from './seep'

export const BaraReact = portion<any, BaraReactContext, BaraReactMold>({
  name: BARA_REACT,
  init: () => {
    return { context }
  },
  whenComponentEmit: flow<any, BaraReactContext, BaraReactMold>({
    bootstrap: ({ context: baraContext, next }) => {
      const { context } = baraContext
      context.event.on('component-event', (payload: any) => {
        next(payload)
      })
    },
    seep,
  }),
})

const { whenComponentEmit } = popEvent(BaraReact)
const { nameEq, kindEq, propNameEq } = popSeep(whenComponentEmit)

export { whenComponentEmit, nameEq, kindEq, propNameEq }

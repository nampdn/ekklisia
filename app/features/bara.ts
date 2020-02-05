import { app } from '@barajs/core'
import { BaraReact, BaraContextState } from '@bit/barajs.portions.react'
import BaraRedux from '@barajs/redux'
import { Store } from '@reduxjs/toolkit'

export const BaraApp = (context: BaraContextState, store?: Store) =>
  app({
    portion: [BaraReact({ context }), store ? BaraRedux({ store }) : undefined],
    trigger: [],
  })

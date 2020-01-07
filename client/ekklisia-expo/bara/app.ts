import { app } from '@barajs/core'
import { BaraReact } from '@bit/barajs.portions.react'
import { Store } from 'redux'
import BaraRedux from '@barajs/redux'

import { scannerTrigger } from './scanner/trigger'
import { authTriggers } from './auth/trigger'
import { homeTriggers } from './home/trigger'

export const BaraApp = (context: any, store: Store) =>
  app({
    name: 'VGM Station',
    portion: [BaraReact({ context }), BaraRedux({ store })],
    trigger: [...scannerTrigger, ...authTriggers, ...homeTriggers],
  })

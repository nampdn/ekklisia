import React from 'react'
import {
  ApplicationProvider as KittenProvider,
  IconRegistry,
} from '@ui-kitten/components'
import { light as darkTheme, mapping } from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import 'moment'
import 'moment/locale/vi'
import { BaraProvider, context } from '@bit/barajs.portions.react'
import { BaraApp } from '../features'

import { run } from '@barajs/core'
import { configureStore } from '../features/redux'

const store = configureStore()
const bara = run(BaraApp(context, store))

export const AppProvider = ({ children }: any) => {
  return (
    <BaraProvider bara={bara} store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <KittenProvider theme={darkTheme} mapping={mapping}>
        {children}
      </KittenProvider>
    </BaraProvider>
  )
}

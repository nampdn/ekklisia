import React from 'react'
import {
  ApplicationProvider as KittenProvider,
  IconRegistry,
} from '@ui-kitten/components'
import { light as darkTheme, mapping } from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import 'moment'
import 'moment/locale/vi'

export const AppProvider = ({ children }: any) => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <KittenProvider theme={darkTheme} mapping={mapping}>
        {children}
      </KittenProvider>
    </>
  )
}

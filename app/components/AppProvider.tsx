import React from 'react'
import {
  ApplicationProvider as KittenProvider,
  IconRegistry,
} from '@ui-kitten/components'
import { dark as darkTheme, mapping } from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

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

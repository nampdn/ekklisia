import React from 'react'
import { ApplicationProvider as KittenProvider } from '@ui-kitten/components'
import { dark as darkTheme, mapping } from '@eva-design/eva'

export const AppProvider = ({ children }: any) => {
  return (
    <KittenProvider theme={darkTheme} mapping={mapping}>
      {children}
    </KittenProvider>
  )
}

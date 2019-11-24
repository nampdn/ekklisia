import React, { useState, useEffect } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import * as Font from 'expo-font'

import { mapping, light as lightTheme } from '@eva-design/eva'
import {
  ApplicationProvider as UIKittenProvider,
  IconRegistry,
} from 'react-native-ui-kitten'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import { BaraProvider, configureStore } from '../../bara'

const store = configureStore()

export interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [assetLoaded, setAssetLoaded] = useState(false)
  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        'SFCompactDisplay-Heavy': require('../../assets/fonts/SF-Compact-Display-Heavy.otf'),
        'SFCompactDisplay-Medium': require('../../assets/fonts/SF-Compact-Display-Medium.otf'),
        'SFCompactDisplay-Light': require('../../assets/fonts/SF-Compact-Display-Light.otf'),
        'Bookerly-Regular': require('../../assets/fonts/Bookerly-Regular.ttf'),
      })
    } catch (err) {}
    setAssetLoaded(true)
  }

  useEffect(() => {
    loadFonts()
  }, [])

  return assetLoaded ? (
    <BaraProvider store={store}>
      <ReduxProvider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <UIKittenProvider mapping={mapping} theme={lightTheme}>
          {children}
        </UIKittenProvider>
      </ReduxProvider>
    </BaraProvider>
  ) : null
}

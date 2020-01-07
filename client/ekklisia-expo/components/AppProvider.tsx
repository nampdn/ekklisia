import { run } from '@barajs/core'
import { context, BaraProvider } from '@bit/barajs.portions.react'

import { Asset } from 'expo-asset'

import React, { useState, useEffect } from 'react'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { mapping, light } from '@eva-design/eva'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { Provider as ReduxProvider } from 'react-redux'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import { BaraApp, store } from '../bara'

const bara = run(BaraApp(context, store))
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graph.btngiadinh.com',
  }),
})

export interface AppProviderProps {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [assetLoaded, setAssetLoaded] = useState(false)
  const loadFonts = async () => {
    try {
      await Asset.loadAsync([require('../assets/wifiplayer.png')])
    } catch (err) {}
    setAssetLoaded(true)
  }

  useEffect(() => {
    loadFonts()
  }, [])

  return assetLoaded ? (
    <BaraProvider store={store} bara={bara}>
      <ReduxProvider store={store}>
        <ApolloProvider client={client}>
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider theme={light} mapping={mapping}>
            {children}
          </ApplicationProvider>
        </ApolloProvider>
      </ReduxProvider>
    </BaraProvider>
  ) : null
}

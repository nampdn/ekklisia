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

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from '@apollo/react-hooks'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

import { run } from '@barajs/core'
import { BaraApp } from '../features'
import { configureStore } from '../features/redux'
import { default as appTheme } from '../assets/custom-theme.json'

const theme = { ...darkTheme, ...appTheme }

const store = configureStore()
const bara = run(BaraApp(context, store))
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://graph.btngiadinh.com',
  }),
})

export const AppProvider = ({ children }: any) => {
  return (
    <BaraProvider bara={bara} store={store}>
      <ApolloProvider client={client}>
        <IconRegistry icons={EvaIconsPack} />
        <KittenProvider theme={theme} mapping={mapping}>
          {children}
        </KittenProvider>
      </ApolloProvider>
    </BaraProvider>
  )
}

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppProvider } from './components/AppProvider'

import { LoadingScreen } from './features/loading'

export default function App() {
  return (
    <AppProvider>
      <LoadingScreen />
    </AppProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

import React from 'react'
import { View, Text } from 'react-native'
import { AppProvider } from './components/AppProvider'

import RootNavigator from './features/navigation/RootNavigator'

export default function App() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  )
}

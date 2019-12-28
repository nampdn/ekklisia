// if (__DEV__) {
//   import('./components/Reactotron').then(() =>
//     console.log('Reactotron Configured!'),
//   )
// }

import React from 'react'

import { AppProvider } from './components/AppProvider'
import { AppNavigator } from './components/Navigation'

export default function App() {
  return (
    <AppProvider>
      <AppNavigator />
    </AppProvider>
  )
}

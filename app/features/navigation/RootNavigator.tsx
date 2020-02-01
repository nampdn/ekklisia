import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { LoadingScreen } from '../loading'
import { AuthScreen } from '../auth'

const AppNavigator = createStackNavigator(
  {
    Loading: {
      screen: LoadingScreen,
    },
    Auth: {
      screen: AuthScreen,
    },
  },
  {
    initialRouteName: 'Loading',
    headerMode: 'none',
  },
)

export default createAppContainer(AppNavigator)

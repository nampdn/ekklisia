import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { AttendanceScreen } from '../attendance'
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
    Attendance: {
      screen: AttendanceScreen,
    },
  },
  {
    initialRouteName: 'Attendance',
    headerMode: 'none',
  },
)

export default createAppContainer(AppNavigator)

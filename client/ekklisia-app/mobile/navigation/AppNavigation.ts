import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'
import { ifIphoneX } from 'react-native-iphone-x-helper'

import { MobileBottomNavigation } from '../../components'
import { HomeScreen } from '../../components/screens/HomeScreen'
import { SettingScreen } from '../../components/screens/SettingScreen'
import { SearchScreen } from '../../components/screens/SearchScreen'

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      gestureEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
    },
  },
)

export const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: RootStack,
    },
    Search: {
      screen: SearchScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: MobileBottomNavigation,
  },
)

export default createAppContainer(AppNavigator)

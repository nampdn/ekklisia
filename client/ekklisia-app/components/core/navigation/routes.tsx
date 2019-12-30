import React from 'react'
import { useScreens } from 'react-native-screens'
import {
  createAppContainer,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const MenuNavigator = createBottomTabNavigator(
  {
    ['Layouts']: LayoutsNavigator,
    ['Components']: ComponentsNavigator,
    ['Themes']: ThemesNavigator,
  },
  {
    tabBarComponent: MenuContainer,
  },
)

const AppNavigation: NavigationContainer = createStackNavigator(
  {},
  {
    headerMode: 'screen',
    defaultNavigationOptions: {
      header: null,
    },
  },
)

const createAppRouter = (
  container: NavigationContainer,
): NavigationContainer => {
  useScreens()
  return createAppContainer(container)
}

export const Router: NavigationContainer = createAppRouter(AppNavigation)

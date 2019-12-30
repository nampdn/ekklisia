import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { HomeScreen } from '../bara/home'
import { ScannerScreen } from '../bara/scanner'
import { RegisterScreen, RegisterNewProfile } from '../bara/register'
import { AuthScreen } from '../bara/auth'
import { AffiliateScreen } from '../bara/affiliate'
import { FactoryScreen } from '../bara/factory'
import { MemberScreen } from '../bara/member/container/MemberScreen'

const HomeNavigator = createStackNavigator(
  {
    Member: MemberScreen,
    Auth: AuthScreen,
    Home: HomeScreen,
    Register: RegisterScreen,
    RegisterNewProfile: RegisterNewProfile,
    Affiliate: AffiliateScreen,
    Factory: FactoryScreen,
  },
  { headerMode: 'none', initialRouteName: 'Member' },
)

const RootStack = createStackNavigator(
  {
    Main: {
      screen: HomeNavigator,
    },
    Scanner: {
      screen: ScannerScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

export const AppNavigator = createAppContainer(RootStack)

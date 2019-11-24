import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import {
  createStackNavigator,
  TransitionPresets
} from "react-navigation-stack";
import { ifIphoneX } from "react-native-iphone-x-helper";

import {
  MobileBottomNavigation,
  BookListContainer,
  ChapterListContainer,
  RadioGroup,
  HistoryComponent,
  HeaderNavigation
} from "../../components";
import { HomeScreen } from "../../components/screens/HomeScreen";
import { SettingScreen } from "../../components/screens/SettingScreen";
import { SearchScreen } from "../../components/screens/SearchScreen";

const BibleStack = createStackNavigator(
  {
    Book: {
      screen: BookListContainer,
      navigationOptions: {
        title: null
      }
    },
    Chapter: {
      screen: ChapterListContainer,
      navigationOptions: {
        title: null,
        headerLeftContainerStyle: {
          height: 20,
          ...ifIphoneX(
            {
              marginTop: 30
            },
            {
              marginTop: 40
            }
          ),
          marginLeft: 13
        }
      }
    },
    Radio: {
      screen: RadioGroup,
      navigationOptions: {
        title: null,
        headerLeftContainerStyle: {
          height: 0,
          marginLeft: -50
        }
      }
    },
    History: {
      screen: HistoryComponent,
      navigationOptions: {
        title: null,
        headerLeftContainerStyle: {
          height: 0,
          marginLeft: -50
        }
      }
    }
  },
  {
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: "#fff"
      },
      headerStyle: {
        shadowColor: 0,
        elevation: 0,
        height: 100
      },
      gestureEnabled: false
    }
  }
);

const VerseStack = createStackNavigator(
  {
    BibleStack: {
      screen: BibleStack
    }
  },
  {
    defaultNavigationOptions: {
      header: HeaderNavigation,
      headerTransparent: true
    }
  }
);

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Modal: {
      screen: VerseStack,
      navigationOptions: {
        safeAreaInsets: { top: 64 },
        cardOverlayEnabled: true
      }
    }
  },
  {
    mode: "modal",
    headerMode: "none",
    defaultNavigationOptions: {
      gestureEnabled: true,
      ...TransitionPresets.ModalPresentationIOS
    }
  }
);

export const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: RootStack
    },
    Search: {
      screen: SearchScreen
    },
    Setting: {
      screen: SettingScreen
    }
  },
  {
    initialRouteName: "Home",
    tabBarComponent: MobileBottomNavigation
  }
);

export default createAppContainer(AppNavigator);

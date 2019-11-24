import React from "react";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon
} from "react-native-ui-kitten";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";
import { getBottomSpace } from "react-native-iphone-x-helper";

export interface BottomNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const HomeIcon = () => <Icon name="home-outline" fill="#000000" />;
const SearchIcon = () => <Icon name="book" />;
const SettingIcon = () => <Icon name="settings-outline" />;

export const MobileBottomNavigation = (props: BottomNavigationProps) => {
  const onTabSelect = (selectedIndex: number) => {
    const { [selectedIndex]: selectedRoute } = props.navigation.state.routes;
    props.navigation.navigate(selectedRoute.routeName);
  };

  return (
    <BottomNavigation
      style={{ paddingBottom: getBottomSpace() }}
      selectedIndex={props.navigation.state.index}
      onSelect={onTabSelect}
    >
      <BottomNavigationTab icon={HomeIcon} />
      <BottomNavigationTab icon={SearchIcon} />
      <BottomNavigationTab icon={SettingIcon} />
    </BottomNavigation>
  );
};

import React from "react";
import { View } from "react-native";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";
import { HeaderSelectorModal } from "./HeaderSelectorModal";

export interface HeaderNavigationProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const HeaderNavigation = (props: HeaderNavigationProps) => {
  const { navigation } = props;
  return (
    <View>
      <HeaderSelectorModal navigation={navigation} />
    </View>
  );
};

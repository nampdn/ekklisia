import React from "react";
import { View, StyleSheet } from "react-native";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";
import { HeaderComponent } from "./HeaderComponent";
import { ContentComponent } from "./ContentComponent";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export interface HomePageComponentProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const HomePageComponent = (props: HomePageComponentProps) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <HeaderComponent />
      <ContentComponent navigation={navigation} />
    </View>
  );
};

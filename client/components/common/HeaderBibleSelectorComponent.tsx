import React from "react";
import { StyleSheet, Animated } from "react-native";
import { BibleVersionComponent } from "../common/BibleVersionComponent";
import { BibleAddressComponent } from "../common/BibleAddressComponent";
import { ifIphoneX } from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    ...ifIphoneX(
      {
        height: 110
      },
      {
        height: 100
      }
    ),
    backgroundColor: "rgba(237, 240, 242, 1)"
  }
});

export interface HeaderBibleSelectorComponentProps {
  navTranslate: Animated.AnimatedInterpolation;
  opacityHeader: Animated.AnimatedDiffClamp;
  onPress: () => void;
  onPressBibleVer: () => void;
}

export const HeaderBibleSelectorComponent = (
  props: HeaderBibleSelectorComponentProps
) => {
  const { onPress, navTranslate, onPressBibleVer, opacityHeader } = props;
  return (
    <Animated.View
      style={[styles.wrapper, { transform: [{ translateY: navTranslate }] }]}
    >
      <BibleVersionComponent onPress={onPressBibleVer} />
      <BibleAddressComponent onPress={onPress} opacityHeader={opacityHeader} />
    </Animated.View>
  );
};

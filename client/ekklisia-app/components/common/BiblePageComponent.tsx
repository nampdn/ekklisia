import React from "react";
import { StyleSheet, Animated } from "react-native";
import { HeaderBibleSelectorComponent } from "../common/HeaderBibleSelectorComponent";
import { MockTextBibleComponent } from "../common/MockTextBibleComponent";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export interface BiblePageComponentProps {
  navTranslate: Animated.AnimatedDiffClamp;
  scrollAnim: Animated.Value;
  opacityHeader: Animated.AnimatedDiffClamp;
  onMomentumScrollBegin: () => void;
  onMomentumScrollEnd: () => void;
  onScrollEndDrag: () => void;
  onPress: () => void;
  onPressBileVer: () => void;
}

export const BiblePageComponent = (props: BiblePageComponentProps) => {
  const {
    navTranslate,
    scrollAnim,
    opacityHeader,
    onPress,
    onPressBileVer,
    onMomentumScrollBegin,
    onMomentumScrollEnd,
    onScrollEndDrag
  } = props;

  return (
    <Animated.View style={styles.container}>
      <HeaderBibleSelectorComponent
        navTranslate={navTranslate}
        opacityHeader={opacityHeader}
        onPress={onPress}
        onPressBibleVer={onPressBileVer}
      />
      <MockTextBibleComponent
        onMomentumScrollBegin={onMomentumScrollBegin}
        onMomentumScrollEnd={onMomentumScrollEnd}
        onScrollEndDrag={onScrollEndDrag}
        scrollAnim={scrollAnim}
      />
    </Animated.View>
  );
};

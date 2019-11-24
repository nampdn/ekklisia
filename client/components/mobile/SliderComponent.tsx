import React from "react";
import { ScrollView, View, StyleSheet, Animated } from "react-native";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  selectAllWindows,
  selectActiveWindow,
  focusWindow,
  WindowState
} from "../../bara/features/window";
import { AnimatedButton } from "../common";

const styles = StyleSheet.create({
  main: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%"
  },
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#e1e1ef",
    paddingTop: 2
  },
  scroll: {
    height: 65,
    paddingVertical: 5
  }
});

export interface SliderComponentProps {
  bottomAnim: Animated.AnimatedDiffClamp;
  opacityView: Animated.AnimatedDiffClamp;
  opacityAnim: Animated.AnimatedDiffClamp;
}

export const SliderComponent = (props: SliderComponentProps) => {
  const { bottomAnim, opacityAnim, opacityView } = props;
  const windows = useSelector(selectAllWindows, shallowEqual);
  const selectedWindow = useSelector(selectActiveWindow, shallowEqual);
  const dispatch = useDispatch();

  return (
    <Animated.View
      style={[
        styles.main,
        { transform: [{ translateY: bottomAnim }], opacity: opacityView }
      ]}
    >
      <View style={styles.container}>
        <AnimatedButton
          active={false}
          title="Home"
          icon="home-outline"
          onPress={() => dispatch(focusWindow({ id: 0 }))}
          opacityAnim={opacityAnim}
        />
        <ScrollView
          contentContainerStyle={[styles.scroll]}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {windows.map((window: WindowState, index: number) => (
            <AnimatedButton
              key={window.id}
              active={selectedWindow === window.id}
              title={window.data.title}
              icon="book"
              onPress={() => dispatch(focusWindow(window))}
              opacityAnim={opacityAnim}
            />
          ))}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

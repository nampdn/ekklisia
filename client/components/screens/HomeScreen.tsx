import React, { useEffect } from "react";
import { StyleSheet, Animated, Easing } from "react-native";
import { Layout } from "react-native-ui-kitten";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";
import { SliderComponent, HomeViewPager, BibleVersionSelector } from "..";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  overlay: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    opacity: 0.5,
    backgroundColor: "#000"
  }
});

export interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const { Value, timing, parallel } = Animated;

export const HomeScreen = (props: HomeScreenProps) => {
  const { navigation } = props;
  let show = true;
  const bottomAnim = new Value(-250);
  const top = new Value(-840);

  const handlePress = () => {
    const value = show ? 0 : -250;
    const visible = show ? 0 : -840;
    parallel([
      timing(bottomAnim, {
        toValue: value,
        duration: 200,
        easing: Easing.ease
      }),
      timing(top, {
        toValue: visible,
        duration: 20,
        easing: Easing.ease
      })
    ]).start();
  };

  const onTouch = () => {
    const value = -250;
    const visible = -840;
    parallel([
      timing(bottomAnim, {
        toValue: value,
        duration: 200,
        easing: Easing.ease
      }),
      timing(top, {
        toValue: visible,
        duration: 20,
        easing: Easing.ease
      })
    ]).start();
  };

  const scrollAnim = new Animated.Value(0);
  const offsetAnim = new Animated.Value(0);

  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: "clamp"
      }),
      offsetAnim
    ),
    0,
    80
  );

  const navTranslate = clampedScroll.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
    extrapolate: "clamp"
  });
  const bottomAnimated = clampedScroll.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 80],
    extrapolate: "clamp"
  });

  const opacityHeader = clampedScroll.interpolate({
    inputRange: [0, 80],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });

  const opacityView = clampedScroll.interpolate({
    inputRange: [0, 60],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });

  const opacityAnim = clampedScroll.interpolate({
    inputRange: [0, 60],
    outputRange: [1, 0],
    extrapolate: "clamp"
  });

  let _clampedScrollValue = 0;
  let _offsetValue = 0;
  let _scrollValue = 0;

  useEffect(() => {
    scrollAnim.addListener(({ value }) => {
      const diff = value - _scrollValue;
      _scrollValue = value;
      _clampedScrollValue = Math.min(
        Math.max(_clampedScrollValue + diff, 0),
        80
      );
    });
    offsetAnim.addListener(({ value }) => {
      _offsetValue = value;
    });
  });

  const _onScrollEndDrag = () => {
    this._scrollEndTimer = setTimeout(_onMomentumScrollEnd, 250);
  };

  const _onMomentumScrollBegin = () => {
    clearTimeout(this._scrollEndTimer);
  };

  const _onMomentumScrollEnd = () => {
    const toValue =
      _scrollValue > 80 && _clampedScrollValue > 30
        ? _offsetValue + 80
        : _offsetValue - 80;
    Animated.timing(offsetAnim, {
      toValue,
      duration: 350
    }).start();
  };

  return (
    <Layout level="3" style={styles.container}>
      <HomeViewPager
        navTranslate={navTranslate}
        scrollAnim={scrollAnim}
        opacityHeader={opacityHeader}
        onMomentumScrollBegin={_onMomentumScrollBegin}
        onMomentumScrollEnd={_onMomentumScrollEnd}
        onScrollEndDrag={_onScrollEndDrag}
        navigation={navigation}
        onPressBibleVer={handlePress}
      />
      <SliderComponent
        bottomAnim={bottomAnimated}
        opacityView={opacityView}
        opacityAnim={opacityAnim}
      />
      <BibleVersionSelector bottomAnim={bottomAnim} />
      <Animated.View onTouchStart={onTouch} style={[styles.overlay, { top }]} />
    </Layout>
  );
};

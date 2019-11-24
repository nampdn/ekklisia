import React from "react";
import { Animated } from "react-native";
import { ViewPager } from "react-native-ui-kitten";
import { useSelector, useDispatch } from "react-redux";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";

import { BiblePageComponent } from "./BiblePageComponent";
import { HomePageComponent } from "../common/HomePageComponent";
import {
  selectAllWindows,
  selectActiveWindow,
  focusWindow
} from "../../bara/features/window";

export interface HomeViewPagerProps {
  navTranslate: Animated.AnimatedDiffClamp;
  scrollAnim: Animated.Value;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  opacityHeader: Animated.AnimatedDiffClamp;
  onMomentumScrollBegin: () => void;
  onMomentumScrollEnd: () => void;
  onScrollEndDrag: () => void;
  onPressBibleVer: () => void;
}

export const HomeViewPager = (props: HomeViewPagerProps) => {
  const windows = useSelector(selectAllWindows);
  const activeWindow = useSelector(selectActiveWindow);
  const dispatch = useDispatch();
  const {
    navTranslate,
    scrollAnim,
    opacityHeader,
    navigation,
    onPressBibleVer,
    onMomentumScrollBegin,
    onMomentumScrollEnd,
    onScrollEndDrag
  } = props;
  return (
    <ViewPager
      style={{ flex: 1 }}
      selectedIndex={activeWindow === 0 ? 0 : activeWindow}
      onSelect={newIndex => dispatch(focusWindow({ id: newIndex }))}
    >
      <HomePageComponent navigation={navigation} />
      {windows.map(win => (
        <BiblePageComponent
          key={win.id}
          navTranslate={navTranslate}
          scrollAnim={scrollAnim}
          opacityHeader={opacityHeader}
          onMomentumScrollBegin={onMomentumScrollBegin}
          onMomentumScrollEnd={onMomentumScrollEnd}
          onScrollEndDrag={onScrollEndDrag}
          onPress={() => navigation.navigate("Modal")}
          onPressBileVer={onPressBibleVer}
        />
      ))}
    </ViewPager>
  );
};

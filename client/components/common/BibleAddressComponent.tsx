import React from "react";
import { StyleSheet, TouchableOpacity, Animated } from "react-native";
import { Icon, Input } from "react-native-ui-kitten";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
    backgroundColor: "rgba(237, 240, 242, 0.5)",
    height: 20,
    marginTop: 11
  },
  input: {
    width: 230,
    marginLeft: 5,
    marginRight: 7,
    backgroundColor: "rgba(215, 223, 229, 0.5)",
    borderRadius: 8
  }
});

export interface BibleAddressComponentProps {
  onPress: () => void;
  opacityHeader: Animated.AnimatedDiffClamp;
}

export const BibleAddressComponent = (props: BibleAddressComponentProps) => {
  const { onPress, opacityHeader } = props;
  return (
    <Animated.View style={[styles.container, { opacity: opacityHeader }]}>
      <TouchableOpacity>
        <Icon name="arrow-ios-back" width={28} height={28} fill="#3366ff" />
      </TouchableOpacity>
      <Input style={styles.input} placeholder="Search" size="small" />
      <TouchableOpacity onPress={onPress}>
        <Icon name="list" width={28} height={28} fill="#3366ff" />
      </TouchableOpacity>
    </Animated.View>
  );
};

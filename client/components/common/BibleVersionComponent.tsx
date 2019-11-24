import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-ui-kitten";
import { ifIphoneX } from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  container: {
    ...ifIphoneX(
      {
        marginTop: 35
      },
      {
        marginTop: 25
      }
    ),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 20,
    backgroundColor: "rgba(237, 240, 242, 0.5)",
    overflow: "hidden"
  },
  txtBibleVersion: {
    fontFamily: "SFCompactDisplay-Medium",
    color: "#a1a1a1",
    fontSize: 9,
    letterSpacing: 1,
    textAlign: "right"
  }
});

export interface BibleVersionComponentProps {
  onPress: () => void;
}

export const BibleVersionComponent = (props: BibleVersionComponentProps) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.txtBibleVersion}>TRUYỀN THỐNG HIỆU ĐÍNH</Text>
      <TouchableOpacity style={{ marginLeft: 8 }} onPress={onPress}>
        <Icon
          name="arrow-ios-downward-outline"
          width={15}
          height={15}
          fill="#a1a1a1"
        />
      </TouchableOpacity>
    </View>
  );
};

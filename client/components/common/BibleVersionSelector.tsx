import React, { useState } from "react";
import { StyleSheet, Animated, ScrollView } from "react-native";
import { Radio, RadioGroup } from "react-native-ui-kitten";

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    left: 0,
    width: "100%",
    height: "30%"
  },
  group: {
    position: "relative",
    borderColor: "#ff0000",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    margin: 8
  },
  radio: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    padding: 14,
    paddingRight: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d8d8"
  },
  text: {
    fontSize: 17,
    fontFamily: "SFCompactDisplay-Medium"
  }
});

export interface BibleVersionSelectorProps {
  bottomAnim: Animated.Value;
}

export const BibleVersionSelector = (props: BibleVersionSelectorProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { bottomAnim = 0 } = props;
  const data = [
    "TRUYỀN THỐNG 1926",
    "BẢN HIỆN ĐẠI",
    "BẢN DỊCH MỚI",
    "BẢN DỊCH 2016",
    "BẢN DỊCH HIỆU ĐÍNH 2010",
    "BẢN DỊCH 2011",
    "BẢN PHỔ THÔNG"
  ];
  return (
    <Animated.View style={[styles.container, { bottom: bottomAnim }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RadioGroup
          style={styles.group}
          selectedIndex={selectedIndex}
          onChange={newIndex => setSelectedIndex(newIndex)}
        >
          {data.map((value, index) => (
            <Radio
              key={index}
              style={styles.radio}
              textStyle={styles.text}
              text={value}
            />
          ))}
        </RadioGroup>
      </ScrollView>
    </Animated.View>
  );
};

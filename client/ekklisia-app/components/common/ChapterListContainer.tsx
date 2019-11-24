import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "./Button";

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    height: "95%"
  },
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    width: "90%"
  },
  box: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  text: {
    width: "100%",
    height: 25,
    marginBottom: 10,
    fontFamily: "SFCompactDisplay-Medium",
    fontSize: 18,
    textAlign: "center"
  }
});

export interface ChapterListContainerProps {
  onPress: () => void;
}

export const ChapterListContainer = (props: ChapterListContainerProps) => {
  const data = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18"
  ];
  const { onPress } = props;
  const [widthButton, setWidthButton] = useState(0);

  useEffect(() => {
    onLayout;
  });

  const onLayout = layout => {
    const { width } = layout;
    const newWidth = (width * 0.998) / 7 - 2;
    setWidthButton(newWidth);
  };

  return (
    <View style={styles.main}>
      <View style={[styles.container]}>
        <Text style={styles.text}>Chọn Chương</Text>
        <View
          onLayout={event => onLayout(event.nativeEvent.layout)}
          style={styles.box}
        >
          {data.map((number, index) => (
            <Button
              key={index}
              widthButton={widthButton}
              onPress={onPress}
              title={number}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

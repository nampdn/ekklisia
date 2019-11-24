import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";
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
  text: {
    width: "100%",
    height: 25,
    marginBottom: 10,
    fontFamily: "SFCompactDisplay-Medium",
    fontSize: 18,
    textAlign: "center"
  },
  hidden: {
    display: "none"
  },
  visible: {
    display: "flex"
  },
  old: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  new: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  }
});

export interface BookListContainerProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const BookListContainer = (props: BookListContainerProps) => {
  const oldTestament = [
    "SA",
    "XU",
    "LE",
    "DAN",
    "PHUC",
    "GIOS",
    "CAC",
    "RU",
    "1SA",
    "2SA",
    "1VUA",
    "2VUA",
    "1SU",
    "2SU",
    "EXO",
    "NE",
    "ET",
    "GIOP",
    "THI",
    "CH",
    "TR",
    "NHA",
    "ES",
    "GIE",
    "CA",
    "EXE",
    "DA",
    "OS",
    "GIO",
    "AM",
    "AP",
    "GION",
    "MI",
    "NA",
    "HA",
    "SO",
    "AG",
    "XA",
    "MA"
  ];
  const newTestament = [
    "MA",
    "MAC",
    "LU",
    "GI",
    "CO",
    "RO",
    "1CO",
    "2CO",
    "GA",
    "EPH",
    "PHI",
    "COS",
    "1TE",
    "2TE",
    "1TI",
    "2TI",
    "TIT",
    "PHIL",
    "HEB",
    "GIA",
    "1PHI",
    "2PHI",
    "1GI",
    "2GI",
    "3GI",
    "GIU",
    "KHAI"
  ];
  const { navigation } = props;
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
        <Text style={styles.text}>Chọn Sách</Text>
        <ScrollView
          onLayout={event => onLayout(event.nativeEvent.layout)}
          horizontal={false}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.old}>
            {oldTestament.map((value, index) => (
              <Button
                key={value}
                onPress={() => navigation.navigate("Chapter")}
                widthButton={widthButton}
                title={value}
              />
            ))}
          </View>
          <View style={styles.new}>
            {newTestament.map((value, index) => (
              <Button
                onPress={() => navigation.navigate("Chapter")}
                key={index}
                widthButton={widthButton}
                title={value}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

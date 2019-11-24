import React from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

const height = Dimensions.get("window").height;
const padding = height * 0.025;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    height: "95%"
  },
  container: {
    flexDirection: "column",
    width: "90%"
  },
  stack: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "#e1e1ef",
    padding: padding
  },
  text: {
    fontFamily: "SFCompactDisplay-Light",
    fontSize: 20,
    letterSpacing: 0.8,
    fontWeight: "300"
  }
});

export const HistoryComponent = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <View style={styles.main}>
      <View style={[styles.container]}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          {data.map((number, index) => (
            <View key={index} style={styles.stack}>
              <Text style={styles.text}>Giang {number}:16</Text>
              <Text style={styles.text}>TT</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

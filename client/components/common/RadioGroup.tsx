import React from "react";
import { View, ScrollView, Text, StyleSheet, Dimensions } from "react-native";
import { Icon } from "react-native-ui-kitten";

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
  box: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderRightWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#e1e1ef",
    padding: padding
  },
  boxFirst: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 2,
    borderBottomWidth: 1,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#e1e1ef",
    padding: padding
  },
  boxLast: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 2,
    borderTopWidth: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderColor: "#e1e1ef",
    padding: padding
  },
  text: {
    fontFamily: "SFCompactDisplay-Medium",
    fontSize: 21
  },
  hidden: {
    display: "none"
  },
  visible: {
    display: "flex"
  }
});

export const RadioGroup = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  return (
    <View style={styles.main}>
      <View style={[styles.container]}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          {data.map((number, index) => {
            if (index === 0)
              return (
                <View key={index} style={styles.boxFirst}>
                  <Text style={styles.text}>Chương {number}</Text>
                  <Icon
                    name="arrow-ios-downward-outline"
                    width={24}
                    height={24}
                    fill="#a1a1a1"
                  />
                </View>
              );
            else if (index === data.length - 1)
              return (
                <View key={index} style={styles.boxLast}>
                  <Text style={styles.text}>Chương {number}</Text>
                  <Icon
                    name="arrow-ios-downward-outline"
                    width={24}
                    height={24}
                    fill="#a1a1a1"
                  />
                </View>
              );
            else
              return (
                <View key={index} style={styles.box}>
                  <Text style={styles.text}>Chương {number}</Text>
                  <Icon
                    name="arrow-ios-downward-outline"
                    width={24}
                    height={24}
                    fill="#a1a1a1"
                  />
                </View>
              );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

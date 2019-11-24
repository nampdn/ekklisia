import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  container: {
    ...ifIphoneX(
      {
        paddingTop: 20,
        height: 165
      },
      {
        paddingTop: 0,
        height: 150,
      }
    ),
    backgroundColor: "#0a81d1",
    overflow: "visible",
    width: "100%"
  },
  content: {
    alignContent: "space-around",
    paddingTop: 30,
    paddingLeft: 20
  },
  txtName: {
    fontSize: 36,
    color: "#ffffff",
    paddingTop: 5,
    letterSpacing: 2.5,
    lineHeight: 30,
    fontFamily: "SFCompactDisplay-Heavy"
  },
  txtSlogan: {
    ...ifIphoneX(
      {
        width: "80%"
      },
      {
        width: "85%"
      }
    ),
    fontSize: 20,
    paddingTop: 10,
    alignContent: "space-between",
    fontFamily: "SFCompactDisplay-Medium",
    color: "#abd0e8"
  }
});

export const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.txtName}>VIETBIBLE</Text>
        <Text style={styles.txtSlogan}>
          Chương trình học và nghiên cứu Kinh Thánh cho người Việt
        </Text>
      </View>
    </View>
  );
};

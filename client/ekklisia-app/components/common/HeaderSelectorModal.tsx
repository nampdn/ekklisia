import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    alignItems: "center"
  },
  container: {
    justifyContent: "center",
    flexDirection: "row",
    ...ifIphoneX(
      {
        marginTop: 20
      },
      {
        marginTop: 10
      }
    ),
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    height: "5%"
  },
  buttonLeft: {
    justifyContent: "center",
    alignItems: "center",
    width: "33.34%",
    height: 36,
    borderWidth: 2,
    borderColor: "#e1e1ef",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  buttonRight: {
    justifyContent: "center",
    alignItems: "center",
    width: "33.34%",
    height: 36,
    borderWidth: 2,
    borderColor: "#e1e1ef",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: "33.34%",
    height: 36,
    borderWidth: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#e1e1ef"
  },
  textStyle: {
    fontFamily: "SFCompactDisplay-Medium",
    fontWeight: "bold",
    fontSize: 17,
    color: "#0040ff"
  },
  buttonActive: {
    backgroundColor: "#0040ff",
    borderColor: "#0040ff"
  },
  textActive: {
    color: "#fff"
  },
  line: {
    justifyContent: "center",
    height: 4,
    width: "30%",
    marginTop: 8,
    borderRadius: 8,
    backgroundColor: "#000"
  }
});

export interface HeaderSelectorModalProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const HeaderSelectorModal = (props: HeaderSelectorModalProps) => {
  const { navigation } = props;
  const [active, setActive] = useState(0);

  const onPressBook = () => {
    navigation.navigate("Book");
    setActive(0);
  };

  const onPressRadio = () => {
    navigation.navigate("Radio");
    setActive(1);
  };

  const onPressHistory = () => {
    navigation.navigate("History");
    setActive(2);
  };

  return (
    <View style={styles.main}>
      <View style={styles.line} />
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPressBook}>
          <View
            style={[
              styles.buttonLeft,
              active === 0 ? styles.buttonActive : null
            ]}
          >
            <Text
              style={[
                styles.textStyle,
                active === 0 ? styles.textActive : null
              ]}
            >
              Địa chỉ
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onPressRadio}>
          <View
            style={[styles.button, active === 1 ? styles.buttonActive : null]}
          >
            <Text
              style={[
                styles.textStyle,
                active === 1 ? styles.textActive : null
              ]}
            >
              Mục lục
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onPressHistory}>
          <View
            style={[
              styles.buttonRight,
              active === 2 ? styles.buttonActive : null
            ]}
          >
            <Text
              style={[
                styles.textStyle,
                active === 2 ? styles.textActive : null
              ]}
            >
              Gần đây
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

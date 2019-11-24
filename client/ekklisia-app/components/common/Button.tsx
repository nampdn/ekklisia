import React from "react";
import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const widthBox = (width - width / 16) / 7 - width / 300;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "rgba(236,250,168,0.61)",
    marginRight: 2,
    marginBottom: 2,
    borderRadius: 4
  },
  title: {
    fontFamily: "SFCompactDisplay-Light",
    fontSize: 16
  }
});

export interface ButtonProps {
  title: string;
  widthButton: number;
  onPress: () => void;
}

export const Button = (props: ButtonProps) => {
  const { title, onPress, widthButton } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { width: widthButton, height: widthButton }]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

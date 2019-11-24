import React from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions
} from "react-native";
import { Icon } from "react-native-ui-kitten";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    margin: width / 80,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0
    },
    elevation: 1
  },
  buttonActive: {
    backgroundColor: "#006bfb"
  },
  text: {
    fontWeight: "bold",
    fontSize: 13
  }
});

const { Value, spring } = Animated;

export interface CategoryButtonProps {
  title?: string;
  icon?: string;
  widthBox: number;
  index: number;
  onPress?: () => void;
}

export const CategoryButton = (props: CategoryButtonProps) => {
  const value = new Value(1);
  const { title, icon, onPress, widthBox, index } = props;

  const handlePressIn = () => {
    spring(value, {
      toValue: 0.9
    }).start();
  };
  const handlePressOut = () => {
    spring(value, {
      toValue: 1,
      friction: 3,
      tension: 40
    }).start();
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        disabled={index === 0 ? false : true}
      >
        <Animated.View style={[{ transform: [{ scale: value }] }]}>
          <View
            style={[
              styles.button,
              { width: widthBox, height: widthBox },
              index === 0
                ? { backgroundColor: "#ffffff" }
                : { backgroundColor: "#d8d8d8" }
            ]}
          >
            {icon !== undefined && (
              <Icon name={icon} width={45} height={45} fill="#000" />
            )}
            <Text selectable={false} style={styles.text}>
              {title}
            </Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

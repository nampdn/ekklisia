import React, { useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleProp,
  ViewProps
} from "react-native";
import { Icon } from "react-native-ui-kitten";

const styles = StyleSheet.create({
  container: {
    marginLeft: 4,
    marginRight: 4
  },
  button: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    width: 52,
    height: 52,
    paddingLeft: 4,
    paddingRight: 4,
    marginBottom: 3,
    borderRadius: 8,
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
    backgroundColor: "#638bf9"
  },
  text: {
    fontWeight: "bold",
    fontSize: 10
  },
  textActive: {
    color: "#fff"
  }
});

const { Value, spring } = Animated;

export interface AnimatedButtonProps {
  title?: string;
  icon?: string;
  active?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewProps>;
  opacityAnim: Animated.AnimatedInterpolation;
}

export const AnimatedButton = (props: AnimatedButtonProps) => {
  const value = new Value(1);
  const { title, icon, active, onPress, opacityAnim } = props;

  useEffect(() => {
    if (active) {
      handlePressIn();
    } else {
      handlePressOut();
    }
  }, [active]);

  const handlePressIn = () => {
    spring(value, {
      toValue: 1.1
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
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
      >
        <Animated.View
          style={[{ transform: [{ scale: value }] }, { opacity: opacityAnim }]}
        >
          <View
            {...props}
            style={[
              styles.button,
              props.style,
              active === true ? styles.buttonActive : null
            ]}
          >
            {icon !== undefined && active === true ? (
              <Icon name={icon} width={24} height={24} fill="#fff" />
            ) : (
              <Icon name={icon} width={24} height={24} fill="#000" />
            )}
            <Text
              numberOfLines={1}
              selectable={false}
              style={[styles.text, active === true ? styles.textActive : null]}
            >
              {title}
            </Text>
          </View>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

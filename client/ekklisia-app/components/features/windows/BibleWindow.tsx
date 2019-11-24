import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderBibleSelectorComponent } from "../../common/HeaderBibleSelectorComponent";
import { MockTextBibleComponent } from "../../common/MockTextBibleComponent";

import { Window } from "./Window";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export const BibleWindow = () => {
  return (
    <Window>
      <View style={styles.container}>
        <HeaderBibleSelectorComponent />
        <MockTextBibleComponent />
      </View>
    </Window>
  );
};

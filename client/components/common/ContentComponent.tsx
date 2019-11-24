import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, FlatList } from "react-native";
import { CategoryButton } from "../common/CategoryButton";
import { Input } from "react-native-ui-kitten";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";

const width = Dimensions.get("window").width;
const padding = width * 0.039;
const paddingBox = width * 0.03;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    flexDirection: "row",
    width: "100%",
    padding: paddingBox,
    paddingTop: 0
  },
  input: {
    width: "100%",
    padding: padding,
    borderRadius: 8
  }
});

export interface ContentComponentProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export const ContentComponent = (props: ContentComponentProps) => {
  const { navigation } = props;
  const data = [
    {
      index: 0,
      icon: "book",
      title: "KINH THÁNH"
    },
    {
      index: 1,
      icon: "book-open-outline",
      title: "THƯ VIỆN"
    },
    {
      index: 2,
      icon: "book-outline",
      title: "TỪ ĐIỂN"
    },
    {
      index: 3,
      icon: "map-outline",
      title: "BẢN ĐỒ"
    },
    {
      index: 4,
      icon: "globe-outline",
      title: "NGHIÊN CỨU"
    },
    {
      index: 5,
      icon: "edit-2-outline",
      title: "GHI CHÚ"
    }
  ];

  useEffect(() => {
    onLayout;
  });

  const [widthBox, setWidthBox] = useState(0);

  const openMenu = () => {
    navigation.navigate("Modal");
  };

  const onLayout = layout => {
    const { width } = layout;
    const widthButton = (width - 2 * paddingBox) / 3 - width / 40;
    setWidthBox(widthButton);
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        placeholder="Tìm kiếm Kinh Thánh, Sách..."
        size="medium"
      />
      <View
        onLayout={event => onLayout(event.nativeEvent.layout)}
        style={styles.box}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CategoryButton
              onPress={() => (item.index === 0 ? openMenu() : null)}
              title={item.title}
              icon={item.icon}
              widthBox={widthBox}
              index={item.index}
            />
          )}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

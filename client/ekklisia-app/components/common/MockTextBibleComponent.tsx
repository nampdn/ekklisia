import React from "react";
import { StyleSheet, Text, Animated } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 8,
    ...ifIphoneX(
      {
        paddingTop: 120
      },
      {
        paddingTop: 110
      }
    )
  },
  txtContent: {
    fontFamily: "Bookerly-Regular",
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 35,
    padding: 5
  }
});

export interface MockTextBibleComponentProps {
  scrollAnim: Animated.Value;
  onMomentumScrollBegin: () => void;
  onMomentumScrollEnd: () => void;
  onScrollEndDrag: () => void;
}

export const MockTextBibleComponent = (props: MockTextBibleComponentProps) => {
  const {
    scrollAnim,
    onMomentumScrollBegin,
    onMomentumScrollEnd,
    onScrollEndDrag
  } = props;
  return (
    <Animated.ScrollView
      contentContainerStyle={styles.container}
      scrollEventThrottle={1}
      onMomentumScrollBegin={onMomentumScrollBegin}
      onMomentumScrollEnd={onMomentumScrollEnd}
      onScrollEndDrag={onScrollEndDrag}
      onScroll={Animated.event([
        { nativeEvent: { contentOffset: { y: scrollAnim } } }
      ])}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.txtContent}>
        1Wives, in the same way submit yourselves to your own husbands so that,
        if any of them do not believe the word, they may be won over without
        words by the behavior of their wives, 2when they see the purity and
        reverence of your lives. 3Your beauty should not come from outward
        adornment, such as elaborate hairstyles and the wearing of gold jewelry
        or fine clothes. 4Rather, it should be that of your inner self, the
        unfading beauty of a gentle and quiet spirit, which is of great worth in
        God’s sight. 5For this is the way the holy women of the past who put
        their hope in God used to adorn themselves. They submitted themselves to
        their own husbands, 6like Sarah, who obeyed Abraham and called him her
        lord. You are her daughters if you do what is right and do not give way
        to fear. 7Husbands, in the same way be considerate as you live with your
        wives, and treat them with respect as the weaker partner and as heirs
        with you of the gracious gift of life, so that nothing will hinder your
        prayers. Suffering for Doing Good 8Finally, all of you, be like-minded,
        be sympathetic, love one another, be compassionate and humble. 9Do not
        repay evil with evil or insult with insult. On the contrary, repay evil
        with blessing, because to this you were called so that you may inherit a
        blessing. 1Wives, in the same way submit yourselves to your own husbands
        so that, if any of them do not believe the word, they may be won over
        without words by the behavior of their wives, 2when they see the purity
        and reverence of your lives. 3Your beauty should not come from outward
        adornment, such as elaborate hairstyles and the wearing of gold jewelry
        or fine clothes. 4Rather, it should be that of your inner self, the
        unfading beauty of a gentle and quiet spirit, which is of great worth in
        God’s sight. 5For this is the way the holy women of the past who put
        their hope in God used to adorn themselves. They submitted themselves to
        their own husbands, 6like Sarah, who obeyed Abraham and called him her
        lord. You are her daughters if you do what is right and do not give way
        to fear. 7Husbands, in the same way be considerate as you live with your
        wives, and treat them with respect as the weaker partner and as heirs
        with you of the gracious gift of life, so that nothing will hinder your
        prayers. Suffering for Doing Good 8Finally, all of you, be like-minded,
        be sympathetic, love one another, be compassionate and humble. 9Do not
        repay evil with evil or insult with insult. On the contrary, repay evil
        with blessing, because to this you were called so that you may inherit a
        blessing.
      </Text>
    </Animated.ScrollView>
  );
};

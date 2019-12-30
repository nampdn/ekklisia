import React from 'react'
import { StyleSheet, Animated } from 'react-native'
import { Layout, Text } from 'react-native-ui-kitten'
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.5,
    backgroundColor: '#000',
  },
})

export interface HomeScreenProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

const { Value, timing, parallel } = Animated

export const HomeScreen = (props: HomeScreenProps) => {
  const { navigation } = props

  return (
    <Layout level="3" style={styles.container}>
      <Text>Ekklisia App</Text>
    </Layout>
  )
}

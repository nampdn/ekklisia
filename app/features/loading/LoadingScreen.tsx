import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Spinner, Text } from '@ui-kitten/components'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 16,
  },
})

export const LoadingScreen = ({ navigation }: any) => {
  const goToAuth = () => {
    navigation.replace('Auth')
  }

  useEffect(() => {
    setTimeout(() => {
      goToAuth()
    }, 3000)
  }, [])

  return (
    <Layout style={styles.layout}>
      <Spinner size="giant" />
      <Text style={styles.text}>Kiểm tra bảo mật...</Text>
    </Layout>
  )
}

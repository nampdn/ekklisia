import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Input, Text } from '@ui-kitten/components'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
})

export const AuthScreen = () => {
  return (
    <Layout style={styles.layout}>
      <Text>Đăng Nhập</Text>
    </Layout>
  )
}

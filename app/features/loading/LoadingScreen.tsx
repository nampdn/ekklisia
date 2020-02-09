import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Spinner, Text } from '@ui-kitten/components'
import useLocalStorage from 'react-use-localstorage'

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
  const [jwt] = useLocalStorage('jwt', '')

  const goToAuth = () => {
    navigation.replace('Auth')
  }

  const goToAttendance = () => {
    navigation.replace('Attendance')
  }

  useEffect(() => {
    setTimeout(() => {
      if (jwt !== '') {
        goToAttendance()
      } else {
        goToAuth()
      }
    }, 1500)
  }, [])

  return (
    <Layout style={styles.layout}>
      <Spinner size="giant" />
      <Text style={styles.text}>Đang kiểm tra bảo mật...</Text>
    </Layout>
  )
}

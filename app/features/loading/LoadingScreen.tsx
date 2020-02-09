import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Spinner, Text } from '@ui-kitten/components'
import useLocalStorage from 'react-use-localstorage'
import Lottie from 'lottie-react-web'
import animation from '../../assets/face-scanning.json'

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
    }, 3550)
  }, [])

  return (
    <Layout style={styles.layout}>
      <Lottie
        style={{ width: 300, height: 300 }}
        options={{
          animationData: animation,
        }}
      />
      <Text style={styles.text}>Đang kiểm tra bảo mật...</Text>
    </Layout>
  )
}

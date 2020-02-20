import React, { useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Spinner, Text } from '@ui-kitten/components'
import useLocalStorage from 'react-use-localstorage'
import Lottie from 'lottie-react-web'
import { useLazyQuery } from '@apollo/react-hooks'

import animation from '../../assets/face-scanning.json'
import { GET_GROUP_DATA } from '../attendance/attendanceGraphQL'

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
  const [jwt] = useLocalStorage('jwt', undefined)
  const [loadGroupData, { loading, called }] = useLazyQuery(GET_GROUP_DATA)

  const goToAuth = () => {
    navigation.replace('Auth')
  }

  const goToAttendance = () => {
    navigation.replace('Attendance')
  }

  useEffect(() => {
    if (jwt !== null) {
      if (jwt.length > 1) {
        loadGroupData()
      } else {
        goToAuth()
      }
    }
  }, [jwt])

  useEffect(() => {
    if (!loading && called) {
      goToAttendance()
    }
  }, [loading, called])

  return (
    <Layout style={styles.layout}>
      <Lottie
        style={{ width: 200, height: 200 }}
        options={{
          animationData: animation,
        }}
      />
      <Text style={styles.text}>Đang kiểm tra bảo mật...</Text>
    </Layout>
  )
}

import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Platform,
} from 'react-native'
import {
  Layout,
  Text,
  Card,
  CardHeader,
  Button,
  Avatar,
  Spinner,
} from '@ui-kitten/components'
import * as SecureStore from 'expo-secure-store'

import { useQuery } from '@apollo/react-hooks'
import { GET_PROFILE, FactoryAction } from '../graphql'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { useSelector, useDispatch } from 'react-redux'
import { selectScanningData } from '../../scanner'
import { Dispatch } from '../../rematch'

import { ManagerActions } from './ManagerActions'

const Header = () => <CardHeader title="Giới Thiệu" />
const HeaderManager = () => <CardHeader title="Quản Lý Thiết Bị" />

export const HomeScreen = ({ navigation }) => {
  const [profileId, setProfileId] = useState(null)
  const { loading: loadingProfile, data: profile } = useQuery(GET_PROFILE, {
    variables: { profileId },
  })

  const scanningData = useSelector(selectScanningData)
  const dispatch = useDispatch<Dispatch>()

  const loadAuthenticatedUser = async () => {
    const profileRaw = await SecureStore.getItemAsync('profile')
    const userId = await SecureStore.getItemAsync('userId')
    setProfileId(profileRaw)
  }

  const logout = async () => {
    await SecureStore.deleteItemAsync('profile')
    await SecureStore.deleteItemAsync('authToken')
    await SecureStore.deleteItemAsync('userId')
    navigation.replace('Auth')
  }

  const navigateFactoryAction = (action: FactoryAction) => {
    navigation.navigate('Factory', { action })
  }

  useEffect(() => {
    loadAuthenticatedUser()
  }, [])

  useEffect(() => {
    if (scanningData.data !== null && scanningData.from === 'home::register') {
      dispatch.scanner.scannerReset()
      navigation.navigate('Register', { imei: scanningData.data })
    }
  }, [scanningData])

  const Footer = () => (
    <View style={styles.footerContainer}>
      {/* <Button
        style={styles.footerControl}
        size="small"
        status="basic"
        onPress={() => navigation.navigate('Affiliate')}
      >
        ĐĂNG KÝ GIÚP
      </Button> */}
      <Button
        style={styles.footerControl}
        size="small"
        onPress={() =>
          navigation.navigate('Scanner', { from: 'home::register' })
        }
      >
        ĐĂNG KÝ QR
      </Button>
    </View>
  )

  const AvatarMenu = () => {
    const menu = [{ title: 'Đăng xuất' }]
    return (
      <TouchableOpacity onPress={logout}>
        {loadingProfile && <Spinner size="medium" />}
        {profile && (
          <Avatar size="medium" source={{ uri: profile.profile.photoUrl }} />
        )}
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, padding: 8 }}>
        <View style={styles.header}>
          <Text
            category="h1"
            style={{
              marginTop: Platform.select({
                android: 24,
                ios: 16,
              }),
            }}
          >
            VGM Station
          </Text>
          <AvatarMenu />
        </View>
        <ScrollView>
          <Card header={Header} status="success">
            <Text>
              VGM Station - Chương trình đăng ký thông tin sử dụng thiết bị Wifi
              Player
            </Text>
            <Text></Text>
          </Card>
          <Card style={{ marginTop: 24 }} footer={Footer}>
            <Text>
              Nếu bạn đang sở hữu một thiết bị WIFI Player, hãy đăng ký thông
              tin thiết bị trước khi gửi thiết bị đó đến tay người nghe.
            </Text>
          </Card>
          <Card style={{ marginTop: 24 }} header={HeaderManager}>
            <ManagerActions onAction={navigateFactoryAction} />
          </Card>
        </ScrollView>
      </Layout>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

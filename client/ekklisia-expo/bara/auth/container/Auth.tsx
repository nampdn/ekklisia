import { useBara } from '@bit/barajs.portions.react'

import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Layout, Text, Button, Avatar, Modal } from '@ui-kitten/components'

import * as SecureStore from 'expo-secure-store'

import { useSelector, useDispatch } from 'react-redux'
import { AppState, Dispatch } from '../../rematch'

import { useMutation } from '@apollo/react-hooks'
import { AUTH_FULL } from '../graphql'

import { AuthForm, PhoneForm, PhoneFormData } from '../component'

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  top: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
    paddingTop: 20,
    marginRight: 16,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'green',
  },
  logo: {
    margin: 8,
  },
})

export const AuthScreen = ({ navigation }) => {
  const { getProps } = useBara({
    kind: 'auth-screen',
    handlers: ['onGoogleAuth', 'onPhoneAuth'],
  })
  const [authFull, { loading, error, data: authResult }] = useMutation(
    AUTH_FULL,
  )
  const authState = useSelector((state: AppState) => state.auth)
  const dispatch = useDispatch<Dispatch>()

  const [showPhoneInput, setShowPhoneInput] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkIsAuthenticated = async () => {
    const authToken = await SecureStore.getItemAsync('authToken')
    if (authToken) {
      setIsAuthenticated(true)
    }
  }

  const save = async () => {
    const { user, token } = authResult.authFull
    await SecureStore.setItemAsync('authToken', token)
    await SecureStore.setItemAsync('userId', user.id)
    await SecureStore.setItemAsync('profile', user.profile.id)
    setIsAuthenticated(true)
  }

  useEffect(() => {
    checkIsAuthenticated()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      setShowPhoneInput(false)
      setTimeout(() => {
        navigation.replace('Home')
      }, 500)
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (loading) {
      setShowPhoneInput(false)
    }
    if (authResult) {
      save()
    } else if (error) {
      alert('Có sự cố khi xác minh tài khoản.')
    }
  }, [loading, error])

  // Show when authenticated with OAuth
  useEffect(() => {
    if (authState.email !== '') {
      setShowPhoneInput(true)
    }
  }, [authState])

  const authenticate = (phoneFormData: PhoneFormData) => {
    dispatch.auth.setPhoneNumber(phoneFormData)
    const phoneNumber = phoneFormData.phoneNumber + ''
    if (authState.email !== '' && phoneNumber.length > 0) {
      authFull({
        variables: {
          email: authState.email,
          phoneNumber: phoneNumber,
          name: authState.fullName,
          photoUrl: authState.photoUrl,
          googleToken: authState.googleToken,
          googleId: authState.googleId,
        },
      })
    }
  }

  const renderPhoneModal = () => <PhoneForm onSubmit={authenticate} />

  const registerStation = () => {
    alert(
      'Chức năng này hiện đang xây dựng, vui lòng liên hệ trực tiếp số 0903735500 (Thanh Xuân) để được hỗ trợ.',
    )
  }

  return (
    <Layout level="4" style={styles.container}>
      <View style={styles.top}>
        <Button onPress={registerStation} appearance="ghost">
          Đăng Ký Trạm
        </Button>
      </View>
      <View style={styles.brand}>
        <Avatar
          size="giant"
          style={styles.logo}
          source={require('../../../assets/icon.png')}
        />
        <Text category="h1">VGM STATION</Text>
      </View>
      <AuthForm {...getProps()} />
      <Modal
        allowBackdrop={true}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setShowPhoneInput(false)}
        visible={showPhoneInput}
      >
        {renderPhoneModal()}
      </Modal>
    </Layout>
  )
}

import { BaraComponentProps } from '@bit/barajs.portions.react'
import React, { useEffect } from 'react'
import { StyleSheet, Platform } from 'react-native'
import { Card, CardHeader, Button, Icon, Input } from '@ui-kitten/components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
  initAsync,
  askForPlayServicesAsync,
  signInAsync,
  getCurrentUserAsync,
} from 'expo-google-sign-in'
import * as Google from 'expo-google-app-auth'
import * as AppleAuthentication from 'expo-apple-authentication'
import { authConfig } from '../config'
import { requiredSubselectionMessage } from 'graphql/validation/rules/ScalarLeafs'
import { resultKeyNameFromField } from 'apollo-utilities'

const styles = StyleSheet.create({
  keyboard: {
    flex: 0,
  },
  top: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flex: 1,
    marginTop: 40,
    marginRight: 16,
  },
  linkButton: {},
  button: {
    margin: 8,
  },
  appleButton: {
    height: 44,
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
  card: {
    margin: 16,
  },
})

const Header = () => <CardHeader title="Đăng Nhập" />
const GoogleIcon = (style: any) => <Icon {...style} name="google-outline" />
const PhoneIcon = (style: any) => <Icon {...style} name="phone-outline" />
export const PhoneInput = () => (
  <Input
    style={styles.button}
    placeholder="Số điện thoại"
    autoCompleteType="tel"
    dataDetectorTypes="phoneNumber"
    keyboardType="number-pad"
  />
)

export interface AuthFormProps
  extends Omit<BaraComponentProps, 'children' | 'data'> {
  onGoogleAuth?: (data: any) => void
  onGoogleAuthCancel?: () => void
  onPhoneAuth?: () => void
  onAppleAuth?: (data: any) => void
  onAppleAuthCancel?: () => void
}

export const AuthForm = (props: AuthFormProps) => {
  const { onGoogleAuth } = props

  const init = async () => {
    await initAsync({
      clientId: authConfig.clientId,
    })
  }

  useEffect(() => {
    if (!__DEV__) {
      init()
    }
  }, [])

  const signinGoogle = async () => {
    try {
      if (__DEV__) {
        const result = await Google.logInAsync(authConfig)
        if (result.type === 'success') {
          return onGoogleAuth(result)
        } else {
          return { cancelled: true }
        }
      } else {
        await askForPlayServicesAsync()
        const result = await signInAsync()
        const authPayload = {
          type: result.type,
          accessToken: result.user.auth.accessToken,
          idToken: result.user.auth.idToken,
          refreshToken: result.user.auth.idToken,
          user: {
            id: result.user.uid,
            name: result.user.displayName,
            givenName: result.user.lastName,
            familyName: result.user.firstName,
            photoUrl: result.user.photoURL,
            email: result.user.email,
          },
        }
        // alert(JSON.stringify(authPayload, null, 2))
        onGoogleAuth(authPayload)
      }
    } catch (e) {
      return { error: true }
    }
  }

  const signinApple = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      })
      console.log(credential)
      // signed in
    } catch (e) {
      if (e.code === 'ERR_CANCELED') {
        // handle that the user canceled the sign-in flow
      } else {
        console.error(e)
        // handle other errors
      }
    }
  }

  // const signinPhoneNumber = () => {
  //   onPhoneAuth()
  // }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.keyboard}
      enableOnAndroid={true}
    >
      <Card style={styles.card} header={Header}>
        <Button onPress={signinGoogle} style={styles.button} icon={GoogleIcon}>
          Đăng Nhập Bằng Google
        </Button>
        {/* <Button
          onPress={signinPhoneNumber}
          style={styles.button}
          status="basic"
          icon={PhoneIcon}
        >
          Đăng Nhập Số Điện Thoại
        </Button> */}
        {Platform.OS === 'ios' && false && (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={
              AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN
            }
            buttonStyle={
              AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
            }
            cornerRadius={5}
            style={[styles.button, styles.appleButton]}
            onPress={signinApple}
          />
        )}
      </Card>
    </KeyboardAwareScrollView>
  )
}

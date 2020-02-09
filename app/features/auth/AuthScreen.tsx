import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Layout,
  Input,
  Button,
  Card,
  CardHeader,
  Text,
  Spinner,
} from '@ui-kitten/components'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/react-hooks'
import useLocalStorage from 'react-use-localstorage'

import { unit } from '../styles'
import { LOGIN_MUTATION } from './authGraphQL'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2 * unit,
  },
  card: {
    width: '100%',
    maxWidth: 48 * unit,
    alignSelf: 'center',
  },
  input: {
    borderRadius: 20,
    marginTop: unit,
  },
  brand: {
    alignItems: 'center',
    alignSelf: 'center',
    padding: 2 * unit,
  },
})

const AuthHeader = () => <CardHeader title="Đăng Nhập"></CardHeader>
const AuthFooter = ({ onPress }: any) => () => (
  <View>
    <Button onPress={onPress}>Đăng Nhập</Button>
  </View>
)

const AuthForm = ({ onSubmit }: any) => {
  const { register, handleSubmit, setValue } = useForm()

  const change = key => text => setValue(key, text)

  useEffect(() => {
    register('email')
    register('password')
  }, [])

  return (
    <Card
      style={styles.card}
      header={AuthHeader}
      footer={AuthFooter({ onPress: handleSubmit(onSubmit) })}
    >
      <Input
        style={styles.input}
        label="Email"
        onChangeText={change('email')}
      />
      <Input
        style={styles.input}
        label="Mật khẩu"
        onChangeText={change('password')}
        textContentType="password"
        secureTextEntry={true}
      />
    </Card>
  )
}

export const AuthScreen = ({ navigation }: any) => {
  const [login, { data, error, loading }] = useMutation(LOGIN_MUTATION)
  const [jwt, setJWT] = useLocalStorage('jwt', '')

  const authenticate = ({ email, password }) => {
    login({ variables: { email, password } })
  }

  const authSuccess = () => {
    navigation.replace('Attendance')
  }

  useEffect(() => {
    if (data && data.login.token) {
      setJWT(data.login.token)
      authSuccess()
    }
  }, [data])

  useEffect(() => {
    if (error) {
      alert('Đăng nhập thất bại, vui lòng thử lại hoặc liên hệ người quản trị!')
    }
  }, [error])

  return (
    <Layout style={styles.layout}>
      <Layout style={styles.brand}>
        <Text category="h3">BTN Gia Định</Text>
        <Text category="p">Điều hành ban ngành Hội Thánh</Text>
      </Layout>
      {!loading ? (
        <AuthForm onSubmit={authenticate} />
      ) : (
        <Spinner size="giant" />
      )}
    </Layout>
  )
}

import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import {
  Layout,
  Input,
  Button,
  Card,
  CardHeader,
  Text,
} from '@ui-kitten/components'
import { useForm } from 'react-hook-form'

import { unit } from '../styles'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
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
const AuthFooter = ({ onPress }) => () => (
  <View>
    <Button onPress={onPress}>Đăng Nhập</Button>
  </View>
)

const AuthForm = ({ onSubmit }: any) => {
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    register('username')
    register('password')
  }, [])

  return (
    <Card
      style={styles.card}
      header={AuthHeader}
      footer={AuthFooter({ onPress: handleSubmit(onSubmit) })}
    >
      <Input style={styles.input} label="Tên đăng nhập" />
      <Input style={styles.input} label="Mật khẩu" />
    </Card>
  )
}

export const AuthScreen = ({ navigation }: any) => {
  const authSuccess = form => {
    console.log(JSON.stringify(form, null, 2))
    navigation.replace('Attendance')
  }
  return (
    <Layout style={styles.layout}>
      <Layout style={styles.brand}>
        <Text category="h3">BTN Gia Định</Text>
        <Text category="p">Chương trình điều hành ban ngành Hội Thánh</Text>
      </Layout>
      <AuthForm onSubmit={authSuccess} />
    </Layout>
  )
}

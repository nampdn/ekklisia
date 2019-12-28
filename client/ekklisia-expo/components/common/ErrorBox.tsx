import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardHeader, Text } from '@ui-kitten/components'

const styles = StyleSheet.create({
  card: {},
})

const Header = () => <CardHeader title="Có lỗi xảy ra!" />

export interface ErrorBoxProps {
  error: any
}

export const ErrorBox = ({ error }: ErrorBoxProps) => {
  if (!error) return null
  return (
    <Card style={styles.card} header={Header} status="danger">
      <Text>
        {error.message
          ? error.message.replace('GraphQL error:', '')
          : 'Lỗi không xác định!'}
      </Text>
    </Card>
  )
}

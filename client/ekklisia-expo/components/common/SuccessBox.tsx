import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardHeader, Text } from '@ui-kitten/components'

const styles = StyleSheet.create({
  card: {},
})

const Header = () => <CardHeader title="Hoàn tất" />

export interface SuccessBoxProps {
  content: string
}

export const SuccessBox = ({ content }: SuccessBoxProps) => {
  if (!content) return null
  return (
    <Card style={styles.card} header={Header} status="success">
      <Text>{content}</Text>
    </Card>
  )
}

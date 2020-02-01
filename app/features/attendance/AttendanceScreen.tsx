import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

import { unit } from '../styles'
import { MemberList, memberList } from '../member'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 2 * unit,
  },
})

export const AttendanceScreen = () => {
  return (
    <Layout style={styles.layout}>
      <Text category="h3">Điểm Danh</Text>
      <MemberList data={memberList} />
    </Layout>
  )
}

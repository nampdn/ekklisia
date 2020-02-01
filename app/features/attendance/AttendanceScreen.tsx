import React from 'react'
import { StyleSheet } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'

import { unit } from '../styles'
import { MemberList, memberList } from '../member'
import { ActivitySelect } from '../activity'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 2 * unit,
  },
  headerText: {
    marginBottom: 3 * unit,
  },
})

export const AttendanceScreen = () => {
  return (
    <Layout style={styles.layout}>
      <Text style={styles.headerText} category="h3">
        Điểm Danh
      </Text>
      <ActivitySelect />
      <MemberList data={memberList} />
    </Layout>
  )
}

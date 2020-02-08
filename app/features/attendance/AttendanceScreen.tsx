import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Layout, Text } from '@ui-kitten/components'
import CalendarStrip from 'react-native-calendar-strip'

import { ConfirmSlider } from './ConfirmButton'
import { unit } from '../styles'
import { MemberList, memberList } from '../member'
import { ActivitySelect } from '../activity'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingLeft: 2 * unit,
    paddingRight: 2 * unit,
  },
  headerText: {
    marginTop: 2 * unit,
    marginBottom: 3 * unit,
  },
})

export const AttendanceScreen = () => {
  return (
    <Layout style={styles.layout}>
      <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText} category="h4">
          Điểm Danh
        </Text>
        <CalendarStrip
          locale={{ name: 'vi', config: {} }}
          style={{ height: 150, paddingTop: unit }}
        />
        <ActivitySelect />
        <MemberList data={memberList} />
      </ScrollView>
    </Layout>
  )
}

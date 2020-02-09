import React, { useEffect } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Layout, Text, Spinner } from '@ui-kitten/components'
import CalendarStrip from 'react-native-calendar-strip'
import useLocalStorage from 'react-use-localstorage'
import { useQuery } from '@apollo/react-hooks'

import { ConfirmSlider } from './ConfirmButton.web'
import { unit } from '../styles'
import { MemberList, memberList } from '../member'
import { ActivitySelect } from '../activity'
import { MEMBERS_IN_GROUP } from './attendanceGraphQL'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingLeft: 2 * unit,
    paddingRight: 2 * unit,
    alignItems: 'center',
    paddingBottom: 5 * unit,
  },
  content: {
    maxWidth: 80 * unit,
    padding: 2 * unit,
    height: '100vh',
    width: '100vw',
  },
  headerText: {
    marginTop: 2 * unit,
    marginBottom: 3 * unit,
  },
})

export const AttendanceScreen = () => {
  const [jwt] = useLocalStorage('jwt', '')
  const { loading, data } = useQuery(MEMBERS_IN_GROUP)

  return (
    <Layout level="4" style={styles.layout}>
      <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
        <Layout level="3" style={styles.content}>
          <Text style={styles.headerText} category="h4">
            Điểm Danh
          </Text>
          <CalendarStrip
            locale={{ name: 'vi', config: {} }}
            style={{ height: 150, paddingTop: unit }}
          />
          <ActivitySelect />
          {loading ? (
            <Spinner size="giant" />
          ) : (
            <MemberList data={data.membersInGroup} />
          )}
          <ConfirmSlider
            onConfirm={() => alert('Chức năng chưa mở, vui lòng thử lại sau')}
          />
        </Layout>
      </ScrollView>
    </Layout>
  )
}

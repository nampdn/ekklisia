import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Layout, Text, Spinner, withStyles } from '@ui-kitten/components'
import CalendarStrip from 'react-native-calendar-strip'
import { useQuery, useLazyQuery, useMutation } from '@apollo/react-hooks'
import moment from 'moment'
import 'moment/locale/vi'
import 'moment-timezone'
import _ from 'lodash'

import { LoadingView } from '../../components/common'
import { ConfirmSlider } from './ConfirmButton.web'
import { unit } from '../styles'
import { MemberList } from '../member'
import { ActivitySelect } from '../activity'
import {
  GET_GROUP_DATA,
  MAKE_ATTENDANCE_MUTATION,
  GET_ATTENDANCE,
} from './attendanceGraphQL'

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingLeft: 2 * unit,
    paddingRight: 2 * unit,
    alignItems: 'center',
  },
  content: {
    maxWidth: 80 * unit,
    padding: 2 * unit,
    width: '100vw',
    paddingBottom: 6 * unit,
  },
  headerText: {
    marginTop: 2 * unit,
    marginBottom: 3 * unit,
  },
  loading: {
    flex: 1,
    height: 4 * unit,
    paddingTop: 8 * unit,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const getActivityColor = (name: string) => {
  switch (name) {
    case 'Nhóm Thanh Niên':
      return 'green'
    case 'Học Kinh Thánh':
      return 'pink'
    case 'Thăm Viếng':
      return 'yellow'
    case 'Tập Hát':
      return 'violet'
    default:
      return 'white'
  }
}

const groupSchedule = (schedules: any[]) => {
  const groups = _.groupBy(schedules, function(schedule) {
    return (
      moment
        .tz(schedule.date, 'Asia/Ho_Chi_Minh')
        .subtract(7, 'hours')
        // .local()
        .locale('vi')
        .startOf('day')
        .format()
    )
  })
  const result = _.map(groups, function(group, date) {
    return {
      date,
      dots: group.map(({ id, date, activity }) => ({
        scheduleId: id,
        activityId: activity.id,
        name: activity.name,
        date,
        key: activity.id,
        color: activity.color
          ? activity.color
          : getActivityColor(activity.name),
        selectedDotColor: 'black',
      })),
    }
  })
  return result
}

const mapAttendance = (members: any[], attendance: any) => {
  if (attendance?.id) {
    const checkedMembers = []
    const attendees = attendance?.attendees.map(m => m.id) || []

    for (const member of members) {
      checkedMembers.push({
        ...member,
        checked: attendees.indexOf(member.id) > -1,
      })
    }
    return checkedMembers
  }
  return members
}

const Calendar = CalendarStrip as any

export const AttendanceScreen = withStyles(
  (props: any) => {
    const { themedStyle } = props

    const attendanceList = useRef<any>({})
    const [members, setMembers] = useState([])
    const [markedDates, setMarkedDates] = useState([])
    const [activities, setActivities] = useState([])
    const [selectedActivity, setSelectedActivity] = useState(-1)
    const [selectedDate, setSelectedDate] = useState(moment())

    const { loading, data } = useQuery(GET_GROUP_DATA)
    const [
      loadAttendance,
      {
        loading: attendanceLoading,
        called: loadAttendanceCalled,
        data: attendanceData,
      },
    ] = useLazyQuery(GET_ATTENDANCE)
    const [
      makeAttendance,
      {
        loading: makeAttendanceLoading,
        called: makeAttendanceCalled,
        error: makeAttendanceError,
      },
    ] = useMutation(MAKE_ATTENDANCE_MUTATION)

    const switchDate = (dateMoment: moment.Moment) => {
      const dateKey = dateMoment.startOf('date').format()
      const x = markedDates.find(({ date }) => date === dateKey)
      const hasActivity = x && x.dots
      setSelectedDate(dateMoment)
      setActivities(hasActivity ? x.dots : [])
      setSelectedActivity(hasActivity ? 0 : -1)
      attendanceList.current = {}
    }

    const refreshAttendance = () => {
      if (activities[selectedActivity]?.scheduleId && data.myGroups[0]?.id) {
        const scheduleId = activities[selectedActivity].scheduleId
        const groupId = data.myGroups[0].id
        loadAttendance({ variables: { slug: `${scheduleId}$${groupId}` } })
      }
    }

    const markMemberAttendance = (data: any[]) => {
      const scheduleId = activities[selectedActivity].scheduleId
      const attendees = data.filter(p => p.checked).map(p => p.id)
      const absentees = data.filter(p => !p.checked).map(p => p.id)
      attendanceList.current = { scheduleId, attendees, absentees }
    }

    const selectActivity = (index: number) => {
      setSelectedActivity(activities.length > 0 ? index : -1)
    }

    const saveAttendance = () => {
      if (attendanceList.current.scheduleId) {
        makeAttendance({ variables: attendanceList.current })
      }
    }

    useEffect(() => {
      if (data && data.schedules) {
        const d = groupSchedule(data.schedules)
        setMarkedDates(d)
      }
    }, [loading])

    useEffect(() => {
      refreshAttendance()
    }, [selectedActivity, selectedDate])

    useEffect(() => {
      if (loadAttendanceCalled && !attendanceLoading) {
        setMembers(mapAttendance(data.members, attendanceData.attendance))
      }
    }, [attendanceLoading, attendanceData])

    useEffect(() => {
      if (
        !makeAttendanceLoading &&
        makeAttendanceCalled &&
        !makeAttendanceError
      ) {
        alert('Điểm danh thành công, chân thành cảm ơn bạn ^^!')
      }
    }, [makeAttendanceLoading, makeAttendanceCalled])

    return (
      <Layout level="4" style={styles.layout}>
        <ScrollView scrollEnabled showsVerticalScrollIndicator={false}>
          <Layout level="3" style={styles.content}>
            <Text style={styles.headerText} category="h4">
              Điểm Danh
            </Text>
            {loading ? (
              <View style={styles.loading}>
                <Spinner size="giant" />
              </View>
            ) : (
              <>
                <Calendar
                  selectedDate={selectedDate}
                  onDateSelected={switchDate}
                  markedDates={markedDates}
                  calendarAnimation={{ type: 'sequence', duration: 30 }}
                  daySelectionAnimation={{
                    type: 'border',
                    duration: 400,
                    borderWidth: 2,
                    borderHighlightColor: 'white',
                  }}
                  calendarHeaderStyle={{ color: 'white' }}
                  locale={{ name: 'vi', config: {} }}
                  style={[
                    themedStyle.calendar,
                    { height: 150, paddingTop: unit },
                  ]}
                />
                <ActivitySelect
                  selectedIndex={selectedActivity}
                  data={activities}
                  onChange={selectActivity}
                />
                <MemberList
                  data={members}
                  disabled={
                    selectedActivity === -1 ||
                    attendanceLoading ||
                    makeAttendanceLoading
                  }
                  onChange={markMemberAttendance}
                />
                <ConfirmSlider
                  disabled={selectedActivity === -1}
                  onConfirm={saveAttendance}
                />
                <LoadingView
                  show={makeAttendanceLoading || attendanceLoading}
                  text="Đang xử lý..."
                />
              </>
            )}
          </Layout>
        </ScrollView>
      </Layout>
    )
  },
  theme => ({
    calendar: {
      backgroundColor: theme['color-primary-500'],
    },
  }),
)

AttendanceScreen.displayName = 'AttendanceScreen'

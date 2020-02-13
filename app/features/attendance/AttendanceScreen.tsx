import React, { useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Layout, Text, Spinner, withStyles } from '@ui-kitten/components'
import CalendarStrip from 'react-native-calendar-strip'
import useLocalStorage from 'react-use-localstorage'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'
import 'moment/locale/vi'
import 'moment-timezone'
import _ from 'lodash'

import { ConfirmSlider } from './ConfirmButton.web'
import { unit } from '../styles'
import { MemberList } from '../member'
import { ActivitySelect } from '../activity'
import { ATTENDANCE } from './attendanceGraphQL'

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

const Calendar = CalendarStrip as any

export const AttendanceScreen = withStyles(
  (props: any) => {
    const { themedStyle } = props

    const [markedDates, setMarkedDates] = useState([])
    const [activities, setActivities] = useState([])
    const [selectedDate, setSelectedDate] = useState(moment())
    const { loading, data } = useQuery(ATTENDANCE, {})

    const switchDate = (dateMoment: moment.Moment) => {
      const dateKey = dateMoment.startOf('date').format()
      setSelectedDate(dateMoment)
      const x = markedDates.find(({ date }) => date === dateKey)
      setActivities(x && x.dots ? x.dots : [])
    }

    useEffect(() => {
      if (data && data.schedules) {
        const d = groupSchedule(data.schedules)
        console.log(d)
        setMarkedDates(d)
      }
    }, [loading])

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
                <ActivitySelect data={activities} />
                <MemberList data={data.members} />
                <ConfirmSlider
                  onConfirm={() =>
                    alert('Chức năng chưa mở, vui lòng thử lại sau')
                  }
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

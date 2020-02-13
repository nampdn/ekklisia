import React, { useState } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { Radio, RadioGroup } from '@ui-kitten/components'
import moment from 'moment'
import 'moment/locale/vi'
import 'moment-timezone'

import { unit } from '../styles'

const styles = StyleSheet.create({
  layout: {
    marginTop: 2 * unit,
    marginBottom: 2 * unit,
  },
  radioGroup: { flexDirection: 'row', flexWrap: 'wrap' },
  radio: {},
})

export interface ActivitySelectProps {
  data: any[]
  style?: StyleProp<ViewStyle>
}

const showDate = date => {
  const time = moment.tz(date, 'Asia/Ho_Chi_Minh').subtract(7, 'hours')
  return `lúc ${time.format('HH:mm')} (${time
    .local()
    .locale('vi')
    .fromNow()})`
}

export const ActivitySelect = ({ data, style }: ActivitySelectProps) => {
  const [index, setIndex] = useState(0)

  const onCheckedChange = i => {
    setIndex(i)
  }

  return (
    <View style={[styles.layout, style]}>
      <RadioGroup
        style={styles.radioGroup}
        selectedIndex={index}
        onChange={onCheckedChange}
      >
        {data.map(item => (
          <Radio
            key={item.activityId}
            style={styles.radio}
            text={`${item.name} ${showDate(item.date)}`}
          />
        ))}
      </RadioGroup>
    </View>
  )
}
